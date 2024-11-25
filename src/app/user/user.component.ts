import {Component, computed, Input, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from './users';
import {NgOptimizedImage} from '@angular/common';
import { User } from './user.model';
import {CardComponent} from "../../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
    imports: [
        NgOptimizedImage,
        CardComponent
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required:true }) user!: User;
  @Input({ required:true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();


  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
