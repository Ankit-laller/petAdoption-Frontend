import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup= new FormGroup({
    email:new FormControl("",Validators.required,),
    password:new FormControl("",Validators.required,),
   
  })
  constructor(private router:Router, private authService:AuthenticationService) { }

  ngOnInit() {
  }
  navigate(){
    if(this.form.valid){
      this.authService.login(this.form.value).subscribe(r=>{
        if(r?.success){
           localStorage.setItem("token",r.result.token)
          // localStorage.setItem("currentUser",r.user.Id)
          // localStorage.setItem("currentUserName",r.user.name)
          // localStorage.setItem("currentUser",r.user.id)
          this.router.navigateByUrl("/home")
          
        }else{
          alert(r?.message)
        }
      })
    }
    
  }
  navigateToRegister(){
    this.router.navigateByUrl("/register")
  }
}
