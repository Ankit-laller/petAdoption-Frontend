import { Component, ComponentFactoryResolver, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationModalComponent } from 'src/app/pages/notification-modal/notification-modal.component';
import { PetService } from 'src/app/services/pet.service';
import { SignalRServiceService } from 'src/app/services/SignalRService.service';
import { Modal } from 'bootstrap';  // Import the Bootstrap Modal class
import { debug } from 'console';

declare var bootstrap: any; // If you are using Bootstrap's native modal JS


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {

  @ViewChild('container',{read:ViewContainerRef, static:true}) container!:ViewContainerRef;
  requestsCount=0;
  constructor(private petService:PetService, private router:Router,
    private signalRService: SignalRServiceService,
    ) { }
 
  adoptionRequests:any
  notification: string = '';
  private notificationSubscription!: Subscription;
  @ViewChild('generalmodal') generalModal: ElementRef;

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

  closeModal() {
    debugger
    // const modal = new bootstrap.Modal(this.generalModal.nativeElement);
    // modal.hide();  
    var btn = document.getElementById("generalmodal")

      btn.addEventListener("click", function() {
          // Action you want to take when the button is clicked
          console.log("Close button clicked!");

          // Example: Close the modal (you can use your logic to close the modal)
          // If you're using Bootstrap modal:
          var modal = this.closest('.modal'); // Get the closest modal element
          if (modal) {
              var bootstrapModal = new bootstrap.Modal(modal);
              bootstrapModal.hide(); // Close the modal
          }
      });
    
  }

  getAdoptionRequest(){
    
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
