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
  /**
   *
   */
  modalType: 'add' | 'edit' | 'delete' | null = null;
  /**
   *
   * @param organizationService
   */
  constructor(private organizationService: OrganizationService) {
    this.organizationService.getOrganDate().then((data) => {
      this.organizDate = data;
    });
  }
  /**
   *
   * @param id
   */
  openModalEdit(id: number) {
    this.selectedId = id;
    this.modalType = 'edit';
  }
  openModalAdd() {
    this.modalType = 'add';
  }
  openModalDelete(id: number) {
    this.modalType = 'delete';
    this.selectedId = id;
  }
  closeModal() {
    this.modalType = null;
  }
  /***
   *
   */
  onUpdated(org: OrganizInterface) {
    const index = this.organizDate.findIndex((i) => i.id === org.id);
    
    if (index !== -1) {
      console.log(index !== -1);
      
      this.organizDate[index] = org;
      this.organizDate = [...this.organizDate];
    }
  }
  async delete(id: number) {
    // this.isOpenDelete = true;
    await this.organizationService.deleteId(id);
    this.organizDate = this.organizDate.filter((i) => i.id !== id);
    this.modalType = null;
  }
  onAdded(newOrg: OrganizInterface) {
    this.organizDate = [...this.organizDate, newOrg];
    this.closeModal();
  }
}
