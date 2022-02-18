import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/User';
import { environment } from '../../environments/environment';
  
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getUserData():Observable<any>{
    return this.http.get<any>(this.baseUrl + "EdgeLiot/getUserDetails");
  }

  addUserData(user:IUser):Observable<any>{
    const headers={"content-type":"application/json"};
    const body=JSON.stringify(user);
    return this.http.post(this.baseUrl + "EdgeLiot/saveUserDetails",body, {headers: headers});
  }
}
