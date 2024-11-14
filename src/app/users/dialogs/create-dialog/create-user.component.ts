import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { userService } from 'src/app/services/api';
import { UserDto } from 'src/app/services/models/UserDto';


@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserDialog implements OnInit {

  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef< CreateUserDialog>, 
    @Inject(MAT_DIALOG_DATA) 
    public data: UserDto, 
    private _formbuilder: FormBuilder, 
    private userService: userService
  ) { }

  formBuilder(){
    this.form = this._formbuilder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.required],
      birthDay: [null, Validators.required]
    })
  }

  ngOnInit(): void { 
    this.formBuilder()
  }

  createUser(){
    const requestBody = this.form.getRawValue()
    
    if(this.form.valid){
      this.dialogRef.close(requestBody)
    }

  }

  closeDialog(){
    this.dialogRef.close()
  }


}
