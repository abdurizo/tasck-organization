import { Component } from '@angular/core';
import { StatInterface } from '../../models/stat-modul';
import { StatService } from '../../services/stat.service';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrl: './organization-page.component.css'
})
export class OrganizationPageComponent {
stat!: StatInterface[];
  constructor(private statService: StatService) {
    this.stat = statService.statData;
  }
}
