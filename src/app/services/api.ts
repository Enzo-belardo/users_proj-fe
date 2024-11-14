import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDto } from './models/UserDto';


@Injectable({
  providedIn: 'root',
})
export class userService {

  BASE_PATH: string =  'http://localhost:3000/user' 


  constructor(private http: HttpClient) { }

  getAllUser = () : Observable<UserDto[]> => {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    let url = this.BASE_PATH

    return this.http.get<any[]>((url), {
        headers: headers,
    })

  }

  createNewUser = (user: any) : Observable<UserDto> => {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    let url = this.BASE_PATH

    return this.http.post<any>((url),{
        headers: headers,
        user,
    })

  }
  updateUser = (id: string, user: any) : Observable<UserDto[]> => {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    // let params = new HttpParams().set('userId', id);

    let url = this.BASE_PATH

    return this.http.put<any>(`${url}/${id}`, {
        headers: headers,
        user
    })

  }

  deleteUser = (id: string) : Observable<UserDto[]> => {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    let url = this.BASE_PATH

    return this.http.delete<any>(`${url}/${id}`, {
        headers: headers,
    })
  }

}