import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { SidebarModel } from './model/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
 
  @Output() ParentData:EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {  
  }

  sidebarItemClick(sidebarData:string){
    this.ParentData.emit(sidebarData);  
  }



  sidebarArray  :SidebarModel[] = [
    new SidebarModel('Items','bi bi-journals'),
    new SidebarModel('Tests','bi bi-file-earmark-font'),
    new SidebarModel('Test Takers','bi bi-person-fill'),
    new SidebarModel('Groups','bi bi-people-fill'),
    new SidebarModel('Deliveries','bi bi-file-text-fill'),
    new SidebarModel('Results','fas fa-graduation-cap'),
  ]

}
