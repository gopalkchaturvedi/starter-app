import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesService } from '../entries.service';
import { UserEntries } from '../model/UserEntries';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  usersEntriesEdit:UserEntries;
  isText = false;
  isImage = false;
  myEntries = "1";
  entriesType:any;
 
  constructor(private route:Router,private entriesService:EntriesService ) { }

  ngOnInit() {
    if(this.entriesService.editVar!=="0")
    this.getSelectedValue(this.entriesService.editVar);

  }

  getSelectedValue(valId){
    this.entriesService.edit(valId).subscribe(
      data => { // json data
        this.usersEntriesEdit=data.data;
        
      },
      error => {
          console.log('Error: ', error);
         // this.alertService.warning("Invalid Username or Password") ;
      });

  }


  selectChange(event: any) {
    this.entriesType = event.target.value;

   if (this.entriesType === "1"){
    this.isText = true;
    this.isImage = false;
   }
   if (this.entriesType === "2"){
    this.isImage = true;
    this.isText = false;
   }


  }
  save(){
    //alert ("this.entriesType " +this.entriesType+' and user'+this.userEntries.feedback);
   // alert ("this.entriesType " +this.entriesType+' and user'+this.userEntries.imgurl);  
  
   this.entriesService.saveEntries(this.usersEntriesEdit).subscribe(
    data => { // json data
        console.log('Success: ');
        this.route.navigate(['/viewEntries']);
    },
    error => {
        console.log('Error: ', error);
       // this.alertService.warning("Invalid Username or Password") ;
    });
  }
}
