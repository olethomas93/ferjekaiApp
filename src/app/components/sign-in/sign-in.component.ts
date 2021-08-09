import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  email: string | undefined;
  password!: string;
  loginForm!: FormGroup;
  isSubmitted = false;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {

  
   }

  async ngOnInit() { 
   

    this.loginForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(2)]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
    });
  }

  /**
   * Gets error control
   */
   get errorControl() {
    return this.loginForm.controls;
  }

  
    
   signIn(){
    this.isSubmitted = true;

    if (!this.loginForm.valid) {
      let msg = "Login failed!";
     

      return false;
    } else {
     
      this.authService.signIn(this.email, this.password)
      .subscribe(
        result => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });

        return true
    }




  }

  signOut() {
    this.authService.signOut();
  }

}