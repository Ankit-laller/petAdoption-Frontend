import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PetService } from 'src/app/services/pet.service';
import { PetType } from 'src/shared/AppEnum';

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
   this.getPetData()
  }
  iteration=[1,2,3,4]
  
   getPetData(){
       this.petService.getPetData().subscribe(response=>{
      // debugger
      this.catsData = response.result.filter(x=>x.petType.toLowerCase()==PetType.Cat.toString().toLowerCase());
      this.dogsData = response.result.filter(x=>x.petType.toLowerCase()==PetType.Dog.toString().toLowerCase());
      this.birdsData = response.result.filter(x=>x.petType.toLowerCase()==PetType.Bird.toString().toLowerCase());
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
