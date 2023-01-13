import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';






@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


 value:number =50;
  constructor() { }

  ngOnInit(): void {
  }




}
