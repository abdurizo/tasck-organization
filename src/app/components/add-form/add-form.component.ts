import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { NgForm } from '@angular/forms';
import { OrganizInterface } from '../../models/organization-model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
})
export class AddFormComponent {
   organizDate!: OrganizInterface;
  constructor(private registerService: RegisterService) {}
  /**
   *
   */
  submit(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    const addOrganization = form.value;
    this.registerService.postRegister(addOrganization);
    form.resetForm();
  }
}
