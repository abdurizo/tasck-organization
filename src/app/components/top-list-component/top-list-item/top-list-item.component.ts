import { Component, Input } from '@angular/core';
import { Cours } from '../../../models/organization-model';


@Component({
  selector: 'app-top-list-item',
  templateUrl: './top-list-item.component.html',
  styleUrl: './top-list-item.component.css',
})
export class TopListItemComponent {
  @Input()
  theme!: {
    bg: string;
    text: string;
  };
  // @Input()
  cours: Cours[] = [
    {
      id: 1,
      first_name: 'Garreth',
      quantity: 26,
      last_name: 'gparratt',
    },
    {
      id: 2,
      first_name: 'Natividad',
      quantity: 83,
      last_name: 'ncelli1',
    },
    {
      id: 3,
      first_name: 'Falkner',
      quantity: 6,
      last_name: 'fadamthwaite',
    },
    {
      id: 4,
      first_name: 'Bentley',
      quantity: 7,
      last_name: 'bpetras',
    },
    {
      id: 5,
      first_name: 'Edeline',
      quantity: 16,
      last_name: 'ecauderlie',
    },
  ];
}
