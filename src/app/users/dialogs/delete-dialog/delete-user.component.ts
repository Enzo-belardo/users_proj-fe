import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateUserDialog } from '../create-dialog/create-user.component';
import { userService } from 'src/app/services/api';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})

export class DeleteUserDialog implements OnInit {

constructor(
  public dialogRef: MatDialogRef<CreateUserDialog>, 
  @Inject(MAT_DIALOG_DATA) public data: any, 
) { }

ngOnInit(): void {
  
}

closeDialog(){
  this.dialogRef.close(false)
}

deleteUser(){
  this.dialogRef.close(true)
}
  

}
