import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/authentication.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {
  iteration=[1,1,1,1,1,1]
  adoptionRequests:any
  showDetails=false
  petData:any
  userData:any
  requestId:any
  data:any
  constructor(private petService:PetService, private authService:AuthenticationService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getAdoptionRequest()
  }


  getAdoptionRequest(){
    const currentUser= localStorage.getItem("currentUser")
     this.petService.getAdoptionRequest(currentUser).subscribe((r)=>{
      // debugger
       this.adoptionRequests=r
       console.log(this.adoptionRequests)
     })
   }

   getPetData(petId,userId,requestId){
    this.requestId= requestId
    this.showDetails=true
    this.petService.getPetDataById(petId).subscribe((r)=>{
      // debugger
       this.petData = r

    })
    this.authService.getUserId(userId).subscribe(r=>{
      // debugger
      this.userData=r
    })
   }
   acceptAdoptionRequest(){
    this.petService.acceptAdoptionRequest(this.requestId).subscribe(r=>{
      if(r.success){
        alert("request accepted")
        this.showDetails=false
        this.getAdoptionRequest()

      }
    })
   }
   rejectAdoptionRequest(){
    this.petService.rejectAdoptionRequest(this.requestId).subscribe(r=>{
      if(r.success){
        alert("Request Rejected")
        this.showDetails=false
        this.getAdoptionRequest()

      }
    })
   }
   

}
