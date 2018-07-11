import { Component, OnInit } from '@angular/core';
import {FormItem} from '../form-item';
import {faEdit, faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  templateTypes: FormItem[] = [
    {itemType: 'textfield', displayIcon: faEdit, displayName: 'Text Field'},
    {itemType: 'header', displayIcon: faQuoteLeft, displayName: 'Header'}
  ];

  formItems: FormItem[] = [];
  contentBoundary = {x: 0, y: 0, width: 0, height: 0 };
  selectedIndex: number;
  constructor() {

  }

  ngOnInit() {

   }


   selectElement(event) {
      this.selectedIndex = event;
   }

   clearHighLight(){
      this.selectedIndex = -1;
   }

  onStart(content_box) {
    this.contentBoundary = {x: content_box.x, y: content_box.y, width: content_box.width, height: content_box.width };
  }

  onMoving(itemBound) {
    // const movingItemBound = {x: itemBound.x, y: itemBound.y, width: itemBound.width, height: itemBound.width };
    // const center = this.midPoint(movingItemBound);
    // this.logger = 'x:' + center.centerX + ' y: ' + center.centerY;
  }

  onMoveEnd(itemBound, item) {
    const movingItemBound = {x: itemBound.x, y: itemBound.y, width: itemBound.width, height: itemBound.width };
    const containInBound = this.containsBound(this.contentBoundary, movingItemBound);
    if (containInBound) {
      this.formItems.push(item);
    }
  }

  containsBound(parent, child): boolean {
    const cX = this.midPoint(child).centerX;
    const cY = this.midPoint(child).centerY;
    return (cX >= parent.x && cY >= parent.y && cX <= parent.x + parent.width && cY <= parent.y + parent.height);
  }

  midPoint(frame) {
    const centerX = frame.x + frame.width / 2.0;
    const centerY = frame.y + frame.height / 2.0;
    return {centerX: centerX, centerY: centerY};
  }

}
