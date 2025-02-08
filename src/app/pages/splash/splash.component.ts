import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.skipsplash()
  }

  skipsplash(){
    if(localStorage.getItem("currentUser")!=null){
      this.router.navigateByUrl("/home")
    }else{
      this.router.navigateByUrl("/login")
    }
  }

}
