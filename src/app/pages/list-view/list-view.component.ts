import { state } from '@angular/animations';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit, OnChanges  {

  @Input() tag:string;
  @Input() data:{bread:string, image:string};
  @Input() iteration=[1,2,3,4,5,6,7,8];
  @Input() title;
  @Input() petData;
  @Input() isshow :boolean=false;
  imageurl:any
  constructor(private router :Router,  private sanitizer: DomSanitizer, private petService:PetService ) { } 
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.petData)
    // this.imageurl = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.petData[0].petImages[0].bytes}`)
  }
  

  ngOnInit() {
    console.log(this.petData)
  }


  navigateToDetails(pet){
    this.petService.setPetData(pet)
    this.router.navigateByUrl("petdetail",{ state:pet});
  }

}
