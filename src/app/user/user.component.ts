import {Component, computed, Input, input, Output, EventEmitter } from '@angular/core';

import { DUMMY_USERS } from './users';
import {NgOptimizedImage} from '@angular/common';

interface User {
  id: string;
  avatar: string;
  name: string;
}

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
  @Input({ required:true }) user!: User;
  @Output() select = new EventEmitter<string>();


  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
