import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesService } from '../entries.service';
import { User } from '../model/User';
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
  usr=new User();
  enableButton=true;
  message="";
  usrData;
  constructor(private entriesService:EntriesService,private route:Router) { }

  ngOnInit() {
   this.usrData=localStorage.getItem("userData");
   //this.usr=JSON.parse(this.usrData);
   this.message="";
  }
  selectChange(event: any) {
    this.message="";
    this.entriesType = event.target.value;
    this.enableButton=true;
   if (this.entriesType === "1"){
    this.isText = true;
    this.isImage = false;
    this.enableButton=false;
   }
   if (this.entriesType === "2"){
    this.isImage = true;
    this.isText = false;
    
   }


  }
  save(){
    let usrData=localStorage.getItem("userData");
    console.log("user data in view "+usrData);
    this.usr=JSON.parse(usrData);
    this.userEntries.userId=this.usr.id;
    console.log(this.usr.id+"user id in  id "+this.userEntries.userId);
  if (this.entriesType === "1"){
    this.entriesService.saveEntries(this.userEntries).subscribe(
    data => { // json data
        console.log('Success: ');
        //this.route.navigate(['/viewEntries']);
        this.message="added successfully";
    },
    error => {
        console.log('Error: ', error);
       // this.alertService.warning("Invalid Username or Password") ;
    }); 
 }
 if (this.entriesType === "2"){
  this.entriesService.saveEntriesForFiles(this.currentFileUpload,this.usr.id).subscribe(
    data => { // json data
        console.log('Success: ');
        this.message="added successfully";
    },
    error => {
        console.log('Error: ', error);
       // this.alertService.warning("Invalid Username or Password") ;
    });
 }
 

 //this.route.navigate(['/viewEntries']);
}

back(){
  this.route.navigate(['/viewEntries']);
}
selectFile(event) {  
  this.message="";
  const file = event.target.files.item(0);  
  let filename = file.name ; 
  //alert("file type "+file.type );
  if (file.type.match('image/*')||file.type.match('image/jpeg')) {  
    var size = event.target.files[0].size;  
      this.currentFileUpload=event.target.files[0]; 
      this.selectedFiles = event.target.files;  
      this.enableButton=false;
     
  }else{
    //alert('invalid file type, please upload image file');
    this.enableButton=true;
    this.message=" Invalid File Type , Please select image file only ";
  }
} 



}
