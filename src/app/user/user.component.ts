import {Component, computed, Input, input, Output, EventEmitter } from '@angular/core';

import { DUMMY_USERS } from './users';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required:true }) id!: string;
  @Input({ required:true }) avatar!: string;
  @Input({ required:true }) name!: string;
  @Output() select = new EventEmitter<string>();


  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
}
