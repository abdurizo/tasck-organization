import { Component } from '@angular/core';

interface Person {
  organ: string;
  status: string;
  cours: number;
  batch: number;
  price: string;
  actions: string;
}

@Component({
  selector: 'app-all-organization',
  templateUrl: './all-organization.component.html',
  styleUrl: './all-organization.component.css',
})
export class AllOrganizationComponent {
  listOfData: Person[] = [
    {
      organ: 'Otcom',
      status: 'active',
      cours: 65,
      batch: 1,
      price: 'Male',
      actions: '21.183.89.122',
    },
    {
      organ: 'Sonair',
      status: 'active',
      cours: 59,
      batch: 2,
      price: 'Male',
      actions: '1.77.48.233',
    },
    {
      organ: 'Bytecard',
      status: 'active',
      cours: 43,
      batch: 3,
      price: 'Male',
      actions: '225.116.152.84',
    },
    {
      organ: 'Overhold',
      status: 'active',
      cours: 72,
      batch: 4,
      price: 'Female',
      actions: '81.106.120.39',
    },
    {
      organ: 'Trippledex',
      status: 'active',
      cours: 69,
      batch: 5,
      price: 'Male',
      actions: '37.195.86.174',
    },
  ];
}
