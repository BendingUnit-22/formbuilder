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

  movingOffset = { x: 0, y: 0 };
  endOffset = { x: 0, y: 0 };
  edge;

  constructor() { }

  ngOnInit() {
  }

  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }

  onStart(event) {
    console.log('started output:', event);
  }

  onStop(event) {
    console.log('stopped output:', event);
  }

  onMoving(event) {
    this.movingOffset.x = event.x;
    this.movingOffset.y = event.y;
  }

  onMoveEnd(event) {
    this.endOffset.x = event.x;
    this.endOffset.y = event.y;
  }

}
