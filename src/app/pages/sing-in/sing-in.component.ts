import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css',
})
export class SingInComponent {
  error = '';
  constructor(private router: Router) {}
  submit(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const getRegist = localStorage.getItem('registationForm');
    if (!getRegist) {
      return;
    }
    const getRegistParse = JSON.parse(getRegist);
    if (
      email === getRegistParse.email &&
      password === getRegistParse.password
    ) {
      this.router.navigate(['organization']);
    } else {
      this.error="You entered an incorrect password or email"
    }
  }
}
