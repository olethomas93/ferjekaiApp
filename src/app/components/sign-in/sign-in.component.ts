import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations:[
 trigger('titleDiv',[
  state('hover',style({

  })),
  state('nothover',style({

  })),
  transition('*=> hover',[
    animate('0.5s', keyframes([
      style({ transform: 'translateY(0)' }),
     
      style({ transform: ' translateY(-5px)' }),
      style({ transform: 'translateY(0)' }),
     
    ]))

  ])
])
  ]
})

export class SignInComponent implements OnInit {
  email: string | undefined;
  password!: string;
  loginForm!: FormGroup;
  submitted = false;
  user: CognitoUserInterface | undefined;
  authState!: AuthState;
  cognitoUser: any;
  isHover =false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private ref: ChangeDetectorRef
  ) {

  
   }

   toggleHover(){
     this.isHover = !this.isHover
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

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      window.scrollTo(0,1300);
    }else{
      // false for not mobile device
      window.scrollTo(0,1450);
    }

   

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