import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appconst } from 'src/shared/AppConst';
import { AdoptionRequestResponse, ApiResponse, BaseApiReponse, PetApiResponse } from '../data-models/user';

@Injectable({
  providedIn: 'root'
})
export class PetService {

constructor(private http:HttpClient) { }

private dataSubject = new BehaviorSubject(null);
private tokenSubject = new BehaviorSubject(null);
jwtToken = this.tokenSubject.asObservable();
petData= this.dataSubject.asObservable();
baseUrl =Appconst.BaseApiUrl;
setPetData(data:any){
  this.dataSubject.next(data)
}
token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
headerDict = new HttpHeaders({
  'Authorization': `Bearer ${this.token}` // Add the token to the Authorization header
});
 options ={headers:this.headerDict}
  getPetData(){
    return this.http.get<PetApiResponse>(Appconst.BaseApiUrl+"Pet/GetAllPets",this.options)
  }
  getPetDataById(petId){
    let param = new HttpParams()
    param =param.set("petId",petId)
    const options ={headers:this.headerDict,params:param}
    return this.http.get<PetApiResponse>(this.baseUrl+"Pet/GetPetDataByPetId",options)
  }
  getAdoptionRequest(){
    return this.http.get<AdoptionRequestResponse>(this.baseUrl+"Pet/getAdoptionRequests/",this.options)

  }
  sendAdoptionRequest(requestData){
    return this.http.post<{success:boolean,message:string, result:string}>(this.baseUrl+"Pet/sendAdoptionRequest/",requestData,this.options)
  }
  acceptAdoptionRequest(petId){
    let param = new HttpParams()
    param =param.set("petId",petId)
    const options ={headers:this.headerDict,params:param}
    return this.http.get<BaseApiReponse>(this.baseUrl+"Pet/acceptAdoptionRequest",options)
  }
  rejectAdoptionRequest(petId){
    let param = new HttpParams()
    param =param.set("petId",petId)
    const options ={headers:this.headerDict,params:param}
    return this.http.delete<BaseApiReponse>(this.baseUrl+"Pet/deleteadoptionrequest/",options)
  }
   getPetDataByPetType(petType){
    let param = new HttpParams()
    param =param.set("petType",petType)
    const options ={headers:this.headerDict,params:param}
    return  this.http.get(this.baseUrl+"Pet/GetPetDataByPetType",options)
  }
  
  uploadPetData(input){
    return this.http.post<ApiResponse>(this.baseUrl+"Pet/SavePetData", input,this.options)
  }
}
