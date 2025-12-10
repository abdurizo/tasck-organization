import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {
submit(form: NgForm) {
    if (form.valid) {
      console.log('Form data:', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
