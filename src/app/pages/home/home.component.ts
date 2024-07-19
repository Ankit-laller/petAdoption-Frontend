import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router :Router, private petservice:PetService, private sanitizer: DomSanitizer ) { }
  value =5;
  petData:any
  data:any;
  ngOnInit() {
    this.getPetData()
  }
  title= "Take A Look At Some Of Our Pets"
  catsData = {
    bread:"Breed",
    image:"./../../../assets/image2.jpg"
  }
  dogData ={
    bread:"Breed",
    Image:"./../../../assets/dog-imag.jpg"
  }
  // petsData=[this.catsData,this.dogData]

  goToExplore(){
    this.router.navigateByUrl("category")
  }
  getPetData(){
    this.petservice.getPetData().subscribe(r=>{
      // debugger
      this.data= r;
      this.petData = this.data.map(pet => ({
      petId: pet.petId,
      petName: pet.petName,
      description: pet.description,
      petAge: pet.petAge,
      price:pet.price,
      address:pet.address,
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
    console.log(this.petData)
    })
  }
}
