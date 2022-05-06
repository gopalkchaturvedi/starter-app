import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesService } from '../entries.service';
import { LoginService } from '../login.service';
import { User } from '../model/User';

@Component({
  selector: 'app-register-guest',
  templateUrl: './register-guest.component.html',
  styleUrls: ['./register-guest.component.css']
})
export class RegisterGuestComponent implements OnInit {
  user =  new User();
  entriesType:any;
  constructor(private route:Router, private loginService:LoginService) { }

  ngOnInit() {
  }
  goToLoggin(){
    alert('clicked');
    this.route.navigate(['']);
  }

  onSubmit(){
    this.user.userRole=this.entriesType;
    this.loginService.register(this.user).subscribe(
      data => { // json data
          console.log('Success: ', data);
          this.route.navigate(['/viewEntries']);
      },
      error => {
          console.log('Error: ', error);
         
      });
  
  }

  selectChange(event: any) {
    this.entriesType = event.target.value;

   if (this.entriesType === "1"){
    this.user.userRole = 'Admin';
   }
   if (this.entriesType === "2"){
    this.user.userRole = 'user';
    
   }

}
  }
