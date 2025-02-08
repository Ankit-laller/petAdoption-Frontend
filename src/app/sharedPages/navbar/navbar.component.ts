import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationModalComponent } from 'src/app/pages/notification-modal/notification-modal.component';
import { PetService } from 'src/app/services/pet.service';
import { SignalRServiceService } from 'src/app/services/SignalRService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {

  @ViewChild('container',{read:ViewContainerRef, static:true}) container!:ViewContainerRef;
  requestsCount=0;
  constructor(private petService:PetService, private router:Router,private signalRService: SignalRServiceService) { }
  adoptionRequests:any
  notification: string = '';
  private notificationSubscription!: Subscription;
  ngOnInit() {
     this.getAdoptionRequest()
  //  //  this.signalRService.startConnection();
  //   this.notificationSubscription = this.signalRService
  //     .getNotification()
  //     .subscribe((message: string) => {
  //       this.notification = message;
  //     });
  }
  ngOnDestroy(): void {
   // this.notificationSubscription.unsubscribe();
   // this.signalRService.stopConnection();
  }
  openModal(){
    
    this.container.clear();

    let componentType:any;
    componentType = NotificationModalComponent;
    
    const componentRef= this.container.createComponent(componentType);

    const instance = componentRef.instance as NotificationModalComponent;
    instance.adoptionrequests = this.adoptionRequests;
  }

  getAdoptionRequest(){
    
   const currentUser= localStorage.getItem("currentUser")
    this.petService.getAdoptionRequest().subscribe((r)=>{
      this.adoptionRequests=r.result;
      console.log(this.adoptionRequests)
      this.requestsCount= this.adoptionRequests.length
    })
  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")
  }

}
