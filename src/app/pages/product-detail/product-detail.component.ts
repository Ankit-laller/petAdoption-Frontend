import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  petData:any
  image:any
  pet:any;
  data:any
  particularPetTypeData:any;
  
  constructor(private router:Router,private petservice:PetService,private sanitizer: DomSanitizer) { }
  title = "See More Puppies"
  ngOnInit() {  
    // this.petData= history.state
    this.petservice.petData.subscribe(r=>{
      this.petData=r
    })
    console.log(this.petData)
    // this.image=this.petData.petImages[0].imageurl
    // console.log(this.petData)
    this.getPetDataByPetType()
  }

  getData(){
    this.petservice.getPetDataById(this.petData.petId).subscribe(r=>{
      // debugger
      this.pet=r
      this.pet = this.pet.map(pet => ({
        petId: pet.petId,
        petName: pet.petName,
        description: pet.description,
        petAge: pet.petAge,
        isAdopted: pet.isAdopted,
        vaccinated: pet.vaccinated,
        petGender: pet.petGender,
        price:pet.price,
        address:pet.address,
        petType: pet.petType,
        userId: pet.userId,
        petImages: pet.petImages.map(image => ({
          id: image.id,
          imageurl: `data:image/png;base64,${image.bytes}`,
          description: image.description,
          fileExtension: image.fileExtension
        }))
      }));
    })
  }

  getPetDataByPetType(){
    (  this.petservice.getPetDataByPetType(this.petData.petType)).subscribe(r=>{
      // debugger
      this.data= r;
      this.particularPetTypeData = this.data.map(pet => ({
      petId: pet.petId,
      petName: pet.petName,
      description: pet.description,
      petAge: pet.petAge,
      isAdopted: pet.isAdopted,
      vaccinated: pet.vaccinated,
      petGender: pet.petGender,
      petType: pet.petType,
      userId: pet.userId,
      petImages: pet.petImages.map(image => ({
        id: image.id,
        bytes: image.bytes,
        imageurl: this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image.bytes}`),
        description: image.description,
        fileExtension: image.fileExtension
      }))
    }));
    })
  }

 
  sendAdoptionRequest(){
    if(localStorage.getItem("currentUser")===this.petData.userId){
      alert("Request Can't be sent to yourself")
      return
    }
    const requestData = {
      "senderId": localStorage.getItem("currentUser"),
      "senderName": localStorage.getItem("currentUserName"),
      "ownerId": this.petData.userId,
      "petId": this.petData.petId,
      petName:this.petData.petName
    }
    this.petservice.sendAdoptionRequest(requestData).subscribe(r=>{
      // debugger
      if(r.success){
      }
    })
  }

}
