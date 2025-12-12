import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OrganizInterface } from '../models/organization-model';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-all-organization',
  templateUrl: './all-organization.component.html',
  styleUrl: './all-organization.component.css',
})
export class AllOrganizationComponent implements OnInit {
  organizDate!: OrganizInterface[];
  selectedId!: number;
  isOpen = false;

  constructor(private organization: OrganizationService,   private cd: ChangeDetectorRef) {
    // this.organizDate = this.organization.listOfData;
  }
  ngOnInit() {
    // Загружаем из localStorage или используем дефолтные данные
    const stored = localStorage.getItem('organizations');
    if (stored) {
      this.organizDate = JSON.parse(stored);
    } else {
      this.organizDate = this.organization.listOfData;
      localStorage.setItem('organizations', JSON.stringify(this.organizDate));
    }
  }
  openModal(id: number) {
    this.selectedId = id;
    this.isOpen = true;
    console.log(this.isOpen);
  }
  closeModal() {
    this.isOpen = false;
  }
  onSaved(updated: OrganizInterface) {
    // 1) заменяем только тот объект, создаём новый объект (spread)
    const idx = this.organizDate.findIndex(org => org.id === updated.id);
    if (idx !== -1) {
      this.organizDate[idx] = { ...updated }; // новый объект вместо мутации существующего
    }

    // 2) пересоздаём массив (новая ссылка) — это ключ
    this.organizDate = [...this.organizDate];

    // 3) сохраняем в localStorage
    localStorage.setItem('organizations', JSON.stringify(this.organizDate));

    // 4) на всякий случай уведомляем Angular (особенно если вы используете OnPush)
    this.cd.detectChanges();

    this.closeModal();
  }
}
