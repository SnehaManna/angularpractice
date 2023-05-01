import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
url="https://reqres.in/api/users?page=2"
  constructor(private http:HttpClient) { }
  userdata(){
   return this.http.get(this.url);
  }
}
