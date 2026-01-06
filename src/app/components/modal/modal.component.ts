import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input()
  visible = false;
  /**
   *
   */
  @Input()
  type: 'edit' | 'add' | 'delete' = 'add';
  /**
   *
   */
  @Input()
  selectedId!: number | null;
  /**
   *
   */
  @Output()
  closed = new EventEmitter<void>();
  @Output()
  action = new EventEmitter<any>();
  /**
   *
   */
  closeModal() {
    this.closed.emit();
  }
  /**
   *
   */
  onUpdated(data: any) {
    this.action.emit();
    this.closeModal();
  }
  /**
   * 
   */
  delete(){
    this.action.emit(this.selectedId)
    this.closeModal()
  }
}
