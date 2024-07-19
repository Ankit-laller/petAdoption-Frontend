import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

constructor(private http:HttpClient) { }

private dataSubject = new BehaviorSubject(null);
 
petData= this.dataSubject.asObservable();
baseUrl ="https://localhost:7025/api/"
setPetData(data:any){
  this.dataSubject.next(data)
}
  getPetData(){
    return this.http.get("https://localhost:7025/api/Pet/unadoptedPetData")
  }
  getPetDataById(id){
    return this.http.get("https://localhost:7025/api/Pet/"+id)
  }
  getAdoptionRequest(userId){
    return this.http.get("https://localhost:7025/api/AdoptionRequest/getAdoptionRequests/"+userId)

  }
  sendAdoptionRequest(requestData){
    return this.http.post<{success:boolean,message:string}>("https://localhost:7025/api/AdoptionRequest/sendAdoptionRequest/",requestData)
  }
  acceptAdoptionRequest(id){
    return this.http.get<{success:boolean,message:string}>("https://localhost:7025/api/AdoptionRequest/acceptAdoptionRequest/"+id)
  }
  rejectAdoptionRequest(id){
    return this.http.delete<{success:boolean,message:string}>(this.baseUrl+"adoptionRequest/deleteadoptionrequest/"+id)
  }
   getPetDataByPetType(petType){
    return  this.http.get("https://localhost:7025/api/Pet/petType/"+petType)
  }
  
  uploadPetData(petData){
    return this.http.post("https://localhost:7025/api/Pet",petData)
  }
}
