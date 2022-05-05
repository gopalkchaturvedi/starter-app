import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-entries',
  templateUrl: './view-entries.component.html',
  styleUrls: ['./view-entries.component.css']
})
export class ViewEntriesComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    findAllByuserId()
  }
  go(){
  this.route.navigate(['/addEntries']);
  }
}
