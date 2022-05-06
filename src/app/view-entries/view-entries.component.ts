import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesService } from '../entries.service';
import { UserEntries } from '../model/UserEntries';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-view-entries',
  templateUrl: './view-entries.component.html',
  styleUrls: ['./view-entries.component.css']
})
export class ViewEntriesComponent implements OnInit {

  constructor(private route:Router,private entriesService:EntriesService) { }
  usersEntriesList:Array<any>=[];
  
  ngOnInit() {
    //this.usersEntriesList;
    this.entriesService.getEntriesList().subscribe(
      data => { // json data
          console.log('Success: '+data.Success);
          console.log('Success: '+data.Success);
          this.route.navigate(['/viewEntries']);
          this.usersEntriesList=data.data;
      },
      error => {
          console.log('Error: ', error);
         // this.alertService.warning("Invalid Username or Password") ;
      });
  }
  go(){
  this.route.navigate(['/addEntries']);
  }
  approve(valId){
    //alert('selected id is  '+valId);
    this.entriesService.isApprove(valId).subscribe(
      data => { // json data
         alert('Appoved');
         this.route.navigate(['/viewEntries']);
          //this.usersEntriesList=data.data;
      },
      error => {
          console.log('Error: ', error);
         // this.alertService.warning("Invalid Username or Password") ;
      });

  }

  update(userEntries){
    alert('selected id is  '+userEntries.id);
    this.entriesService.update(userEntries).subscribe(
      data => { // json data
         alert('Edit');
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
    alert('selected id is  '+valId);
    this.route.navigate(['/editEntries']);
  }
  
  Delete(valId){
    alert('selected id is  '+valId);
    this.entriesService.delete(valId).subscribe(
      data => { // json data
         alert('Deleted');
         this.route.navigate(['/viewEntries']);
          //this.usersEntriesList=data.data;
      },
      error => {
          console.log('Error: ', error);
         // this.alertService.warning("Invalid Username or Password") ;
      });

  }
  
  downloadfile(fileName){
    var filePath = "D:\\test\\"+fileName;
    alert("file downloaded path is "+filePath);
    }

}
