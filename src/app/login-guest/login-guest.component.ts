import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../model/Login';
import { User } from '../model/User';
import { ResponseObj } from '../model/ResponseObj';

@Component({
  selector: 'app-login-guest',
  templateUrl: './login-guest.component.html',
  styleUrls: ['./login-guest.component.css']
})
export class LoginGuestComponent implements OnInit {
  login =  new Login();
  user = new User();
  obj = new ResponseObj();
  message : string;
  constructor(private route:Router,private loginService:LoginService) { }

  ngOnInit() {
  this.message=this.loginService.message;
  }
go(){
  
  this.route.navigate(['/register']);
}

onSubmit(form:NgForm){
  this.loginService.signin(this.login).subscribe(
    data => { // json data
        //console.log('Success: ', data);
        let usrData=JSON.stringify(data.data);
        this.user = JSON.parse(usrData);
        //console.log('user2: ',  usrData );
        //console.log('user3: ', this.user.id+" name "+this.user.userName );
        localStorage.setItem("userData",usrData);
        if(data.code===200)
        this.route.navigate(['/viewEntries']);
        else
        this.message=data.message;
    },
    error => {
        console.log('Error: ', error);
     });

}
}
