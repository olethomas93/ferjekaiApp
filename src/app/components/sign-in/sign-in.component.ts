import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  email: string | undefined;
  password!: string;
  loginForm!: FormGroup;
  submitted = false;
  user: CognitoUserInterface | undefined;
  authState!: AuthState;
  cognitoUser: any;
  

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private ref: ChangeDetectorRef
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

  scroll(){

    window.scrollTo(0,1200);

  }
  onRegister(cognitoUser: any) {
    this.cognitoUser = cognitoUser;
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


  

}