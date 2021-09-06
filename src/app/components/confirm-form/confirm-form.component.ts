import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { MustMatch } from './comfirmed.validator';
@Component({
  selector: 'app-confirm-form',
  templateUrl: './confirm-form.component.html',
  styleUrls: ['./confirm-form.component.css']
})
export class ConfirmFormComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  password!:string;
  
  @Input() email!: string;
  
  constructor(
  private formBuilder: FormBuilder,
  private _router: Router,
  private authService: AuthService,
  ) { }
  
  ngOnInit() {
  this.registerForm = this.formBuilder.group({
  password: ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword: ['', Validators.required]
},{
  validator:MustMatch('password','confirmPassword')

})
  


}
  
  // Convenient getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
  this.submitted = true;
  
  // stop here if form is invalid
  if (this.registerForm.invalid) {
  return;
  }

  console.log("hei")

  this.authService.completeNewPassword(this.email,this.password)

  
  
 
}
}
