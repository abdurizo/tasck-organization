import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { NgForm } from '@angular/forms';
import { OrganizInterface } from '../../models/organization-model';
import { OrganizationService } from '../../services/organization.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
})
export class AddFormComponent {
  @Output()
  submitted = new EventEmitter<OrganizInterface>();
  constructor(private organizationService: OrganizationService) {}
  /**
   *
   */
  async submit(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    const addOrganization = form.value;
    const newOrgan = await this.organizationService.postOrganDate(
      addOrganization
    );
    form.resetForm();
    this.submitted.emit(newOrgan);
  }
}
