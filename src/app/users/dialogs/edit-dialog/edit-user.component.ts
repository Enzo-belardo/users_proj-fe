import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateUserDialog } from '../create-dialog/create-user.component';
import { userService } from 'src/app/services/api';
import { UserDto } from 'src/app/services/models/UserDto';


@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserDialog implements OnInit {

  form! : FormGroup
  dataUser = this.data

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialog>, 
    @Inject(MAT_DIALOG_DATA) 
    public data: any, 
    private _formbuilder: FormBuilder, 
    private userService: userService
  ) { }

  formBuilder(){
    this.form = this._formbuilder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.email],
      birthDay: [null, Validators.required]
    });
  }
  
  ngOnInit(): void {
    this.formBuilder()
    if(this.dataUser){
      this.patchData();
    }
  }
  
  patchData(){
    this.form.patchValue({
      name: this.dataUser.name,
      surname: this.dataUser.surname,
      email: this.dataUser.email,
      birthDay: this.dataUser.birthDay
    });
  }

  updateDataUser(){
    const formData = this.form.value;
    
    if(this.form.valid){
      this.dialogRef.close(formData)
    }  
  }

  closeDialog(){
    this.dialogRef.close()
  }

}
