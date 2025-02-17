import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private router:Router,private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.skipsplash()
  }

  skipsplash(){
    var token=localStorage.getItem("token")
    if(token){
      this.authenticationService.validateToken().subscribe(r=>{
        if(r.result.token){
          this.router.navigateByUrl("/home")
          localStorage.setItem("token",r.result.token)
          return
        }else{
          this.router.navigateByUrl("/login")
          localStorage.clear()
        }

      }
    )
    this.router.navigateByUrl("/login")
    }else{
      this.router.navigateByUrl("/login")
    }
  }

}
