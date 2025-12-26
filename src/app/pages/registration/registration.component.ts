import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  submit(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    const registationForm = form.value;
    this.registerService.postRegister(registationForm);
   
    form.resetForm();
    this.router.navigate(['sing-in']);
  }
}
