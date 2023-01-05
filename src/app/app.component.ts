import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZTProject';
  selectedSidebar = '';

 sidebarItemClick(sidebarTitle:any){
  console.log(sidebarTitle); 
  this.selectedSidebar = sidebarTitle;
 }
}
