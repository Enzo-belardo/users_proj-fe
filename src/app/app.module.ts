import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateUserDialog } from './users/dialogs/create-dialog/create-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserDialog } from './users/dialogs/edit-dialog/edit-user.component';
import { MatInputModule} from '@angular/material/input'
import { DeleteUserDialog } from './users/dialogs/delete-dialog/delete-user.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    UsersComponent,
    AppComponent,
    EditUserDialog,
    DeleteUserDialog,
    CreateUserDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


