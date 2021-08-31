import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  email: string | undefined;
  password!: string;
  loginForm!: FormGroup;
  submitted = false;
  user: CognitoUserInterface | undefined;
  authState!: AuthState;
  @Output() cognitoUser = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private _snackBar: MatSnackBar
    
  ) {

  
   }

  async ngOnInit() { 
   

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
      });


    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  get f() { return this.loginForm.controls; }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

  

  /**
   * Gets error control
   */
   get errorControl() {
    return this.loginForm.controls;
  }
  get username () {
    return this.loginForm.get('userName') as FormControl
  }
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
    return;
    }

   
    
    this.authService.signIn(this.email, this.password)
    .subscribe(
            user => {

              
              if(user.challengeName==='NEW_PASSWORD_REQUIRED'){

                
                this.cognitoUser.emit(user)

               
              }else{

                this.openSnackBar("Successfull login","ok","green")
                this.router.navigate(['/landing']);
              }
              
            },
            error => {
              this.openSnackBar(error.message,"close","red")
              console.log(error);
            });
    
            return true
        }
  //  signIn(){
  //   this.isSubmitted = true;

  //   if (!this.loginForm.valid) {
  //     let msg = "Login failed!";
     

  //     return false;
  //   } else {
     
  //     this.authService.signIn(this.email, this.password)
  //     .subscribe(
  //       result => {
  //         this.router.navigate(['/landing']);
  //       },
  //       error => {
  //         console.log(error);
  //       });

  //       return true
  //   }




  // }

  signOut() {
    this.authService.signOut();
  }

  openSnackBar(message: string, action: string,color:string) {
    this._snackBar.open(message, action,{duration:3000,panelClass:[color]});
  }

}
