import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../model/Login';

@Component({
  selector: 'app-login-guest',
  templateUrl: './login-guest.component.html',
  styleUrls: ['./login-guest.component.css']
})
export class LoginGuestComponent implements OnInit {
  login =  new Login();
  constructor(private route:Router,private loginService:LoginService) { }

  ngOnInit() {
  
  }
go(){
  
  this.route.navigate(['/register']);
}

onSubmit(form:NgForm){
  alert('this is login');
  alert(this.login.name+ 'clicked');
  ///this.route.navigate(['/register']);
  this.loginService.signin(this.login).subscribe(
    data => { // json data
        console.log('Success: ', data);
        this.route.navigate(['/viewEntries']);
    },
    error => {
        console.log('Error: ', error);
       // this.alertService.warning("Invalid Username or Password") ;
    });

}
}
