import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesService } from '../entries.service';
import { LoginService } from '../login.service';
import { User } from '../model/User';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-register-guest',
  templateUrl: './register-guest.component.html',
  styleUrls: ['./register-guest.component.css']
})
export class RegisterGuestComponent implements OnInit {
  user =  new User();
  entriesType:any;
  message="";
 
  constructor(private route:Router, private loginService:LoginService ,
    private alertService: AlertService) {

      }
   

  ngOnInit() {
   this.message="";
  }
  goToLoggin(){
    this.route.navigate(['']);
  }

  onSubmit(){
    if(this.user.userName.trim().length>0 && this.user.password.trim().length>0){
    this.loginService.register(this.user).subscribe(
      data => { // json data
         // console.log('Success: ', data);
          if(data.code===200)
          this.loginService.message="User registered successfully, pls login ";
          else
          this.loginService.message="error while registering usr pls try again";
          this.route.navigate(['']);
      },
      error => {
        this.loginService.message="error while registering usr pls try again";
      });
    }else{
      this.message="incorrect user name and password, pls try again";
    }
  
  }

  selectChange(event: any) {
    this.entriesType = event.target.value;

   if (this.entriesType === "1"){
    this.user.userRole = 'admin';
   }
   if (this.entriesType === "2"){
    this.user.userRole = 'user';
    
   }

}
  }
