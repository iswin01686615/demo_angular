import { IUserInfo } from '../interfaces/user.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'student',
  templateUrl: './student-component.component.html',
  styleUrl: './student-component.component.css',
})
export class StudentComponent {
  @Input() listData: IUserInfo[] = [];
  @Output() onAdd: EventEmitter<IUserInfo> = new EventEmitter<IUserInfo>();
  @Output() onUpdate: EventEmitter<IUserInfo> = new EventEmitter<IUserInfo>();
  @Output() onDelete: EventEmitter<IUserInfo> = new EventEmitter<IUserInfo>();
  user: IUserInfo = {
    id: 0,
    name: '',
    age: '',
    nationality: '',
  };
  handleAddData() {
    this.onAdd.emit(this.user);
  }
  handdleEdit  (data: any)  {
  console.log(data, 'data');
  this.user = { ...data };
  };
  handleUpdateData() {
    this.onUpdate.emit(this.user);
  }
  handleDeleteData(data: IUserInfo) {
    this.onDelete.emit(data);
  }
}
