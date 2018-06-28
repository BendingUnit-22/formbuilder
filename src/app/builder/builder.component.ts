import { Component, OnInit } from '@angular/core';
import {FormItem} from '../form-item';
import {faEdit, faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  formItems: FormItem[] = [
    {itemType: 'textfield', displayIcon: faEdit, displayName: 'Text Field'},
    {itemType: 'header', displayIcon: faQuoteLeft, displayName: 'Header'}
  ];

  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };

  constructor() { }

  ngOnInit() {
  }

  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }

}
