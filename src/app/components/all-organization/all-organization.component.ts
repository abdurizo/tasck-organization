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
  isOpenAdd = false;
  isOpenDelete = false;
  isDelete = false;
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
  openModalAdd() {
    this.isOpenAdd = true;
  }
  openModalDelete(id:number) {
    this.isOpenDelete = true;
    this.selectedId = id;
  }
  closeModal() {
    this.isOpen = false;
    this.isOpenAdd = false;
    this.isOpenDelete = false;
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
  async delete(id: number) {
    // this.isOpenDelete = true;
    await this.organizationService.deleteId(id);
    this.organizDate = this.organizDate.filter((i) => i.id !== id);
    this.isOpenDelete = false;
  }
  onAdded(newOrg: OrganizInterface) {
    this.organizDate = [...this.organizDate, newOrg];
    this.closeModal();
  }
}
