import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesService } from '../entries.service';
import { UserEntries } from '../model/UserEntries';

@Component({
  selector: 'app-add-entries',
  templateUrl: './add-entries.component.html',
  styleUrls: ['./add-entries.component.css']
})
export class AddEntriesComponent implements OnInit {
  isText = false;
  isImage = false;
  myEntries = "1";
  entriesType:any;
  currentFileUpload: File;
  selectedFiles: FileList; 
  userEntries = new UserEntries();
  constructor(private entriesService:EntriesService,private route:Router) { }

  ngOnInit() {
   
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



 if (this.entriesType === "1"){
  this.entriesService.saveEntries(this.userEntries).subscribe(
    data => { // json data
        console.log('Success: ');
        this.route.navigate(['/viewEntries']);
    },
    error => {
        console.log('Error: ', error);
       // this.alertService.warning("Invalid Username or Password") ;
    }); 
 }
 if (this.entriesType === "2"){
  this.entriesService.saveEntriesForFiles(this.currentFileUpload).subscribe(
    data => { // json data
        console.log('Success: ');
        this.route.navigate(['/viewEntries']);
    },
    error => {
        console.log('Error: ', error);
       // this.alertService.warning("Invalid Username or Password") ;
    });
 }
 

 this.route.navigate(['/viewEntries']);
}

selectFile(event) {  
      
  const file = event.target.files.item(0);  
  let filename = file.name ; 
 // if (file.type.match('application/vnd.ms-excel.csv')||file.type.match('application/vnd.ms-excel.*')||file.type.match('vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {  
    var size = event.target.files[0].size;  
      this.currentFileUpload=event.target.files[0]; 
      this.selectedFiles = event.target.files;  
     
  //}
} 


}
