import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.css']
})
export class NotificationModalComponent implements OnInit {

  @Input() adoptionrequests
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.adoptionrequests)
  }
 navigate(){
  this.router.navigateByUrl("/adoption");
 }
}
