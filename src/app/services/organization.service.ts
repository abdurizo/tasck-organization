import { Injectable } from '@angular/core';
import { OrganizInterface } from '../models/organization-model';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  listOfData: OrganizInterface[] = [
    {
      id: 1,
      organ: 'Otcom',
      status: 'Active',
      cours: 65,
      batch: 1,
      price: '$2.42',
      actions: 'Edit',
    },
    {
      id: 2,
      organ: 'Sonair',
      status: 'Inactive',
      cours: 59,
      batch: 2,
      price: '$4.96',
      actions: 'Edit',
    },
    {
      id: 3,
      organ: 'Bytecard',
      status: 'Active',
      cours: 43,
      batch: 3,
      price: '$2.10',
      actions: 'Edit',
    },
    {
      id: 4,
      organ: 'Overhold',
      status: 'Active',
      cours: 72,
      batch: 4,
      price: '$9.77',
      actions: 'Edit',
    },
    {
      id: 5,
      organ: 'Trippledex',
      status: 'Active',
      cours: 69,
      batch: 5,
      price: '$8.29',
      actions: 'Edit',
    },
  ];
  getById(id:number):OrganizInterface | undefined{
    return this.listOfData.find((i)=>i.id===id)
  }
  constructor() {}
 
}