import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialog } from './dialogs/create-dialog/create-user.component';
import { EditUserDialog } from './dialogs/edit-dialog/edit-user.component';
import { DeleteUserDialog } from './dialogs/delete-dialog/delete-user.component';
import { UserDto } from '../services/models/UserDto';
import { userService } from '../services/api';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'email', 'date', 'actions'];
  dataSource: MatTableDataSource<UserDto> = new MatTableDataSource()

  constructor(private _dialog: MatDialog, private userService: userService, private snackBar: MatSnackBar, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers(){
    this.userService.getAllUser().subscribe(res =>{
      this.dataSource.data = res
    })
  }

  createUser(){
    const dialogRef = this._dialog.open(CreateUserDialog, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.userService.createNewUser(res).subscribe(res=> {
          if(res){
            this.getUsers()
            this.snackBar.open('Utente creato con successo', '', {duration: 2000})

          }
        })
      }
    });
  }


  editUser(data: UserDto, id: string){
    const dialogRef = this._dialog.open(EditUserDialog, {
      width: '800px',
      data: data
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.userService.updateUser(id, res).subscribe(res =>{
          if(res){
            this.getUsers()

            this.cdr.detectChanges()

            this.snackBar.open('Utente modificato con successo', '', {duration: 2000});
          }
        })
      }
    });
  }


  deleteUser(id: string){
    const dialogRef = this._dialog.open(DeleteUserDialog, {
      data: id,
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.userService.deleteUser(id).subscribe(() =>{
          this.getUsers()

          this.cdr.detectChanges()

          this.snackBar.open('Utente eliminato con successo', '' , {duration: 2000});
        })
      }
    });
  }

}
