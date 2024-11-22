import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<string>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(){
    this.cancel.emit();
  }
}
