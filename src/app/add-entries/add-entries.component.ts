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

  }

}
