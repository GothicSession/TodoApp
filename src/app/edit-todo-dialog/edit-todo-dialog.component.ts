import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo:Todo) { }

  ngOnInit(): void {
  }
  onFormSubmit(form:NgForm){
    if(form.invalid) return 
    const updatedTodo={
      ...this.todo,
      ...form.value
    }
    this.dialogRef.close(updatedTodo)
  }
  close(){
    this.dialogRef.close();
  }

}
