import { Component } from '@angular/core';
import { Person } from '../models/organization-model';

@Component({
  selector: 'app-all-organization',
  templateUrl: './all-organization.component.html',
  styleUrl: './all-organization.component.css',
})
export class AllOrganizationComponent {
  listOfData: Person[] = [
    {
      organ: 'Otcom',
      status: 'Active',
      cours: 65,
      batch: 1,
      price: '$2.42',
      actions: 'Edit',
    },
    {
      organ: 'Sonair',
      status: 'Active',
      cours: 59,
      batch: 2,
      price: '$4.96',
      actions: 'Edit',
    },
    {
      organ: 'Bytecard',
      status: 'Active',
      cours: 43,
      batch: 3,
      price: '$2.10',
      actions: 'Edit',
    },
    {
      organ: 'Overhold',
      status: 'Active',
      cours: 72,
      batch: 4,
      price: '$9.77',
      actions: 'Edit',
    },
    {
      organ: 'Trippledex',
      status: 'Active',
      cours: 69,
      batch: 5,
      price: '$8.29',
      actions: 'Edit',
    },
  ];
  /**
   * 
   */
  isOpen=false;  
  openModal(){
    this.isOpen=true;
    console.log(this.isOpen);
  }
  closeModal(){
    this.isOpen=false
  }
}
