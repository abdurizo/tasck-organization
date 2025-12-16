import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrganizInterface } from '../../models/organization-model';
import { OrganizationService } from '../../services/organization.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',
})
export class EditFormComponent implements OnInit {
  @Output() saved = new EventEmitter<OrganizInterface>();
  @Input()
  organizId!: number;
  organizDate!: OrganizInterface;
  constructor(private organization: OrganizationService) {}
  ngOnInit() {
    const stored = localStorage.getItem('organizations');
    const list: OrganizInterface[] = stored
      ? JSON.parse(stored)
      : this.organization.listOfData;
    const organiz = list.find((o) => o.id === this.organizId);

    if (organiz) {
      // Клонируем, чтобы не мутировать оригинал в таблице
      this.organizDate = { ...organiz };
    }
  }
 submit(form: NgForm) {
    if (form.valid) {
      // отправляем обновлённый объект родителю
      this.saved.emit(this.organizDate);
    }
  }
}
