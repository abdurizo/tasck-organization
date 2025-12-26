import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css',
})
export class SingInComponent {
  error = '';
  /**
   *
   */
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}
  /**
   *
   * @param form
   * @returns
   */
  async submit(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    /**
     *
     */
    const email = form.value.email;
    const password = form.value.password;
    /**
     *
     */
    const usersRegist = await this.registerService.getRegister();
    const user = usersRegist.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      this.error = 'You entered an incorrect password or email';
      return;
    }

    if (user) {
      this.router.navigate(['organization']);
    } else {
      this.error = 'You entered an incorrect password or email';
    }
  }
}
