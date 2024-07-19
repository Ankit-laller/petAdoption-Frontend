import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginResponse } from './data-models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private http:HttpClient) { }
isAuthenticated:boolean
login(user){
  return this.http.post<UserLoginResponse>("https://localhost:7025/api/user/login",user)
}
register(user){
 return this.http.post<UserLoginResponse>("https://localhost:7025/api/user/register",user)
}
getUserId(id){
  return this.http.get("https://localhost:7025/api/user/"+id)
}


}
