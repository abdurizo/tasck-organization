import { Component } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-all-organization',
  templateUrl: './all-organization.component.html',
  styleUrl: './all-organization.component.css'
})
export class AllOrganizationComponent {
listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
