import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
url='https://reqres.in/api/login'
  constructor(private http:HttpClient) { }
  getLogin(data:any){
    return this.http.post(this.url,data);
  }
  isloggedin(){
    return true
  }
}
