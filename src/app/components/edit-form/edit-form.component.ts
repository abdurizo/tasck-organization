import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  output,
  SimpleChanges,
} from '@angular/core';
import { OrganizInterface } from '../../models/organization-model';
import { OrganizationService } from '../../services/organization.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',
})
export class EditFormComponent implements OnChanges {
  organizDate!: OrganizInterface;
  @Input()
  id!: number;
  @Output()
  updated = new EventEmitter<OrganizInterface>();
  @Output()
  closed = new EventEmitter();
  /**
   *
   * @param organizationService
   */
  constructor(private organizationService: OrganizationService) {}
  /**
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['id'] && this.id) {
      this.loadData();
    }
  }
  async loadData() {
    const data = await this.organizationService.getById(this.id);
    if (data) {
      this.organizDate = data;
    }
  }
  async submit(form: NgForm) {
    if (form.invalid) return;
    const updatedOrg = await this.organizationService.patchById(
      this.organizDate.id,
      form.value
    );
    if (updatedOrg) {
      this.updated.emit(updatedOrg);
      this.closed.emit();
    }
  }
}
