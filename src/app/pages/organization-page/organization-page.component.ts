import { Component } from '@angular/core';
import { StatInterface } from '../../models/stat-modul';
import { StatService } from '../../services/stat.service';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrl: './organization-page.component.css'
})
export class OrganizationPageComponent {
stats!: StatInterface[];
  constructor(private statService: StatService) {
    // this.stats = statService.statData;
    this.statService.getStatData().then((data)=>{
      this.stats = data
    })
  }
}
