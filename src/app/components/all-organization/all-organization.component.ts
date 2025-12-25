import { Component } from '@angular/core';
import { OrganizInterface } from '../../models/organization-model';
import { OrganizationService } from '../../services/organization.service';

@Component({
  selector: 'app-all-organization',
  templateUrl: './all-organization.component.html',
  styleUrl: './all-organization.component.css',
})
export class AllOrganizationComponent {
  organizDate!: OrganizInterface[];
  selectedId!: number;
  isOpen = false;

  constructor(private organizationService: OrganizationService) {
    this.organizationService.getOrganDate().then((data) => {
      this.organizDate = data;
    });
  }
  /**
   *
   * @param id
   */
  openModal(id: number) {
    this.selectedId = id;
    this.isOpen = true;
  }
  closeModal() {
    this.isOpen = false;
  }
  /***
   *
   */
  onUpdated(org: OrganizInterface) {
    const index = this.organizDate.findIndex((i) => i.id === org.id);
    if (index !== -1) {
      this.organizDate[index] = org;
      this.organizDate = [...this.organizDate];
    }
  }
}
