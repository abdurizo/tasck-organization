import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  constructor(private router: Router) {}
  submit(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    const registationForm = form.value;
    localStorage.setItem('registationForm', JSON.stringify(registationForm));
    form.resetForm();
    this.router.navigate(['sing-in']);    
  }
}
