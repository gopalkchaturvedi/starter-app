import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Login } from './model/Login';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  accessToken : any ;
  API = "http://localhost:8080/login";
  registerAPI = "http://localhost:8080/register";
  constructor(private http: HttpClient) { }
  
  signin(login:Login):Observable<any>{
    console.log("geting token "+this.API);
    const body = new HttpParams()
    .set('username', login.name)
    .set('password', login.password);
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/html',
      'Accept': '*/*' 
      })
      
    };
   return this.http.get(this.API+"?username="+login.name+"&password="+login.password,{ responseType: 'text' });

  }
  register(user:User):Observable<any>{
    console.log("geting token "+this.API);
    const body = new HttpParams()
    
    const httpOptions = {
      headers: new HttpHeaders({
      
        'Content-Type':  'application/json',
        'Accept': '*/*' 
      })
      
    };
   return this.http.post(this.registerAPI,user);

  }
}
