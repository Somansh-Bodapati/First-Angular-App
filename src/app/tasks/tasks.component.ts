import { Component, Input } from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NgForOf, NgIf} from "@angular/common";
import {AddTaskComponent} from "./add-task/add-task.component";
import {NewTaskData} from "./task/task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NgForOf,
    AddTaskComponent,
    NgIf
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required:true }) userId!: string;
  @Input({ required:true }) name?: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

}
