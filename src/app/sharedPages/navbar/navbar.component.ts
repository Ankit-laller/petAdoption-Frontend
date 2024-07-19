import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationModalComponent } from 'src/app/pages/notification-modal/notification-modal.component';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('container',{read:ViewContainerRef, static:true}) container!:ViewContainerRef;
  requestsCount=0;
  constructor(private petService:PetService, private router:Router) { }
  adoptionRequests:any
  ngOnInit() {
     this.getAdoptionRequest()
     
  }
  openModal(){
    debugger
    this.container.clear();

    let componentType:any;
    componentType = NotificationModalComponent;
    
    const componentRef= this.container.createComponent(componentType);

    const instance = componentRef.instance as NotificationModalComponent;
    instance.adoptionrequests = this.adoptionRequests;
  }

  getAdoptionRequest(){
    
   const currentUser= localStorage.getItem("currentUser")
    this.petService.getAdoptionRequest(currentUser).subscribe((r)=>{
      this.adoptionRequests=r
      console.log(this.adoptionRequests)
      this.requestsCount= this.adoptionRequests.length
    })
  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")
  }

}
