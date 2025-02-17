import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private authService:AuthenticationService) { }
 user:FormGroup= new FormGroup({
  email:new FormControl("",Validators.required,),
  name:new FormControl("", Validators.required),
  phoneNo : new FormControl("", Validators.required),
  city :new FormControl("", Validators.required),
  password:new FormControl("",Validators.required,),
 })
  ngOnInit() {
  } 
  navigate(){
    debugger
    console.log(this.user.value)
    if(this.user.valid){
      debugger
      this.authService.register(this.user.value).subscribe(r=>{
        debugger
        if(r.success){
          alert(r.message)
          this.router.navigateByUrl("/login")
        }
      });
    }
  }
  NavigateToLogin(){
    this.router.navigateByUrl("/login")
  }

}
