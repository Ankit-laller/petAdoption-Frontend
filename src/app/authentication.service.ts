import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, UserLoginResponse } from './data-models/user';
import { Appconst } from 'src/shared/AppConst';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private http:HttpClient) { }
isAuthenticated:boolean
login(user){
  return this.http.post<ApiResponse>(Appconst.BaseApiUrl+"Authentication/login",user)
}
register(user){
 return this.http.post<ApiResponse>(Appconst.BaseApiUrl+"User/SignUpUser",user)
}
getUserId(id){
  return this.http.get(Appconst.BaseApiUrl+"user/"+id)
}


}
