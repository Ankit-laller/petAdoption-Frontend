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
        debugger
        if(r.success){
          localStorage.setItem("token",r.token)
          localStorage.setItem("currentUser",r.user.id)
          localStorage.setItem("currentUserName",r.user.name)
          this.router.navigateByUrl("/home")
          
        }else{
          alert(r.message)
        }
      })
    }
    
  }
  navigateToRegister(){
    this.router.navigateByUrl("/register")
  }
}
