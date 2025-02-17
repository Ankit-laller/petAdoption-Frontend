import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, LoginResult, UserLoginResponse } from './data-models/user';
import { Appconst } from 'src/shared/AppConst';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private http:HttpClient) { }
isAuthenticated:boolean
headerDict = new HttpHeaders({
  'Authorization': `Bearer ${localStorage.getItem('token')}` // Add the token to the Authorization header
});
login(user){
  return this.http.post<ApiResponse>(Appconst.BaseApiUrl+"Authentication/login",user)
}
register(user){
 return this.http.post<ApiResponse>(Appconst.BaseApiUrl+"User/SignUpUser",user)
}
getUserId(userId){
  let param = new HttpParams()
    param =param.set("userId",userId)
    const options ={headers:this.headerDict,params:param}
  return this.http.get<ApiResponse>(Appconst.BaseApiUrl+"User/GetUserById",options)
}
validateToken(){
  let param = new HttpParams()
  param =param.set("token",localStorage.getItem("token"))
  const options ={params:param}
  return this.http.get<ApiResponse>(Appconst.BaseApiUrl+"Authentication/ValidateToken",options)
}


}
