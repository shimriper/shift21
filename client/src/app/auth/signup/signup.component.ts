import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // signupForm: FormGroup;

  constructor(
    // public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    // this.signupForm = this.fb.group({
    //   email: [''],
    //   password: ['']
    // });
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form);
    this.authService.createUser(form.value.name,form.value.email, form.value.password);
    form.resetForm();
  }


  registerUser() {
    console.log("reeeeeeeeeeeeeee");
    // this.authService.createUser(this.signupForm.value);
  }

  ngOnInit(): void {
  }

}
