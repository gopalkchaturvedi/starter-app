import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesService } from '../entries.service';
import { UserEntries } from '../model/UserEntries';
import { saveAs } from 'file-saver';
import { User } from '../model/User';

@Component({
  selector: 'app-view-entries',
  templateUrl: './view-entries.component.html',
  styleUrls: ['./view-entries.component.css']
})
export class ViewEntriesComponent implements OnInit {

  constructor(private route:Router,private entriesService:EntriesService) { 
    console.log('constor'); 
    this.loadData(); 

  }
  usersEntriesList:Array<any>=[];
  usr= new User()
  message:string;  
  isRecords=false;
  isAction:boolean;
  ngOnInit() {
    console.log('oninit');
    this.loadData(); 
  }

  loadData(){
    
    console.log("user data in view ");
    let usrData=localStorage.getItem("userData");
    console.log("user data in view "+usrData);
    this.usr=JSON.parse(usrData);
    //this.usersEntriesList;
    console.log("user role"+this.usr.userRole);
    if(this.usr.userRole==='admin')
    this.isAction=true;
    else
    this.isAction=false;

    this.entriesService.getEntriesList(this.usr).subscribe(
      data => { 
        console.log(data.code +'  message'+data.message);
        console.log(data.code +'  message'+data.code);
        if(data.code===200)
        {//this.route.navigate(['/viewEntries']);
          this.usersEntriesList=data.data;
          this.isRecords=true;
      }if(data.code===403)
      { 
        //alert("error");
       // this.route.navigate(['']);
      }
      else{
        this.message=data.message;
        this.route.navigate(['/viewEntries']);
      }
        
      },
      error => {
          console.log('Error: ', error);
         // this.alertService.warning("Invalid Username or Password") ;
      });
  }
  addEntries(){
  this.route.navigate(['/addEntries']);
  }
  approve(valId){
    //alert('selected id is  '+valId);
    this.entriesService.isApprove(valId).subscribe(
      data => { // json data
        this.ngOnInit();
        // alert('Appoved');
         //this.route.navigate(['/viewEntries']);
          //this.usersEntriesList=data.data;
      },
      error => {
          console.log('Error: ', error);
         // this.alertService.warning("Invalid Username or Password") ;
      });

  }

  update(userEntries){
    //alert('selected id is  '+userEntries.id);
    this.entriesService.update(userEntries).subscribe(
      data => { // json data
        // alert('Edit');
         this.route.navigate(['/updateEntries']);
          //this.usersEntriesList=data.data;
      },
      error => {
          console.log('Error: ', error);
         // this.alertService.warning("Invalid Username or Password") ;
      });

  }

  Edit(valId){
    this.entriesService.editVar=valId;
    this.route.navigate(['/editEntries']);
  }
  
  Delete(valId){
    //alert('selected id is  '+valId);
    this.entriesService.delete(valId).subscribe(
      data => { // json data
        // alert('Deleted');
         this.ngOnInit();
         //this.route.navigate(['/viewEntries']);
          //this.usersEntriesList=data.data;
      },
      error => {
          console.log('Error: ', error);
         // this.alertService.warning("Invalid Username or Password") ;
      });

  }
 
  downloadfile(valId){

console.log('downloading file');
    this.entriesService.downloadfile(valId).subscribe(
      (response) => {
         //alert('downloaded'+response);
         this.downloadFile(response);
      },
      error => {
          console.log('Error: ');
         // this.alertService.warning("Invalid Username or Password") ;
      });


    }

    downloadFile(data) {
      const blob = new Blob([data], { type : 'application/*' });
      const file = new File([blob], "photo5" + '.jpg', { type: 'application/*' });
      saveAs(file);
  }

  logout(){
    localStorage.clear();
    let usrData=localStorage.getItem("userData");
    //console.log("user data in view "+usrData);
    //alert(usrData);
    this.route.navigate(['']);
    
             
  }

}
