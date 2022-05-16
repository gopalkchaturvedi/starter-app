import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesService } from '../entries.service';
import { User } from '../model/User';
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
  currentFileUpload: File;
  selectedFiles: FileList; 
  userEntries = new UserEntries();
  usr= new User();
  enableButton=true;
  message="";
  

 
  constructor(private route:Router,private entriesService:EntriesService ) { }

  ngOnInit() {
    let usrData=localStorage.getItem("userData");
   
    if(this.entriesService.editVar!=="0")
    this.getSelectedValue(this.entriesService.editVar);

  }

  getSelectedValue(valId){
    this.entriesService.edit(valId).subscribe(
      data => {
        console.log(data.data); 
        this.usersEntriesEdit=data.data;
        this.loadChange();
      },
      error => {
          //console.log('Error: ', error);
         // this.alertService.warning("Invalid Username or Password") ;
      });

  }


  selectChange(event: any) {
    this.entriesType = event.target.value;
    this.message="";
    this.enableButton=true;

   if (this.entriesType === "1"){
    this.isText = true;
    this.isImage = false;
    this.enableButton=false;

   }
   if (this.entriesType === "2"){
    this.isImage = true;
    this.isText = false;
    this.enableButton=true;
    }


  }

  loadChange() {
    this.message="";
    this.enableButton=true;
   // console.log(this.usersEntriesEdit.feedback +" entries type "+ this.entriesType);
   if (this.usersEntriesEdit.feedback!=null){

    this.entriesType ="1";
    console.log(this.usersEntriesEdit.feedback +" entries type "+ this.entriesType);
    this.isText = true;
    this.isImage = false;
    this.enableButton=false;
   }
   if (this.usersEntriesEdit.imgurl!=null){
     this.entriesType = "2";
    this.isImage = true;
    this.isText = false;
    //this.enableButton=true;
   }


  }
  
  save(){
    let usrData=localStorage.getItem("userData");
    console.log("user data in view "+usrData);
    this.usr=JSON.parse(usrData);
    this.usersEntriesEdit.userId=this.usr.id;
    this.usersEntriesEdit.id=Number(this.entriesService.editVar);
   
    console.log(this.usr.id+"user id in  id "+this.userEntries.userId);
  if (this.entriesType === "1"){
    this.entriesService.update(this.usersEntriesEdit).subscribe(
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
  this.entriesService.updateEntriesForFiles(this.currentFileUpload,this.usr.id,this.usersEntriesEdit.id).subscribe(
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
