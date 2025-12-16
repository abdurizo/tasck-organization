import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrl: './top-list.component.css',
})
export class TopListComponent {
  @Input()
  theme!: {
    bg: string;
    text: string;
  };
}
