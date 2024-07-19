import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private petService:PetService,private sanitizer: DomSanitizer) { }
  catsData:any
  birdsData:any
  dogsData:any
  data:any

  ngOnInit() {
   this.getcatData()
   this.getDogData()
   this.getBirdData()
  }
  iteration=[1,2,3,4]
  
   getcatData(){
       this.petService.getPetDataByPetType("Cat").subscribe(r=>{
      // debugger
      this.catsData=r
    })
  }
  getDogData(){
    this.petService.getPetDataByPetType("Dog").subscribe(r=>{
  //  debugger
   this.dogsData=r
 })
}
getBirdData(){
  this.petService.getPetDataByPetType("Bird").subscribe(r=>{
//  debugger
 this.birdsData= r
})
}
}
