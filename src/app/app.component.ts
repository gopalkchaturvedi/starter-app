import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'this is our angular proram';
  months = [ "jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  isAvailalbe = false;
  toDo = ["angular Training"];
  addItem(){
    this.toDo.push('item1');
  }
  clickFunction(){
    alert('clicked');
  }
  
}
