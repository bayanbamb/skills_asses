import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  imageUrl = 'assets/images/TahakomLogo.png';
  title = 'Login';
  submitted = false;
  constructor(private router: Router) {}
  loginForm = new FormGroup({
      username: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]),
  });
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.submitted = false;
      this.router.navigate(['/home']);
    }
  }
}
