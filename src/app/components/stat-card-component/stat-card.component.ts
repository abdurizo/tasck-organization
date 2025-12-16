import { Component, Input } from '@angular/core';
import { StatInterface } from '../../models/stat-modul';

@Component({
  selector: 'tat-card',
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css',
})
export class StatCardComponent {
  @Input()
  stat!: StatInterface;
}
