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
    this.petservice.getPetData().subscribe(response=>{
      this.petData = response.result;
    console.log(this.petData)
    })
  }
}
