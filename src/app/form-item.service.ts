import { Injectable } from '@angular/core';
import {FormItem, HeaderItem, PhoneItem, TextFieldItem, TitleItem} from './form-item';
import {faEdit, faQuoteLeft, faParagraph, faPhone} from '@fortawesome/free-solid-svg-icons';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormItemService {

  formTemplate: FormItem[] = [];

  constructor() {
    this.formTemplate.push(this.makeHeaderTemplate());
  }

  getFormItems(): Observable<FormItem[]> {
    const templateTypes = [
      this.makeTitleViewTemplate(),
      this.makeTextFieldTemplate(),
      this.makePhoneTitle()
    ];
    return of(templateTypes);
  }

  getNewTemplate(): Observable<FormItem[]> {
    return of(this.formTemplate);
  }


  makeHeaderTemplate(): HeaderItem {
    const header = new HeaderItem();
    header.itemType = 'header';
    header.displayIcon = faQuoteLeft;
    header.displayName = 'Header';
    header.title = 'Application for Employment';
    header.formUUID = '9a28aee0-081a-40d8-9bae-d41dfe7d92ae';
    header.qrcodeURL = 'qr.png';
    return header;
  }

  makeTextFieldTemplate(): TextFieldItem {
    const textfield = new TextFieldItem();
    textfield.itemType = 'textfield';
    textfield.displayIcon = faEdit;
    textfield.displayName = 'Text Field';
    textfield.title = 'Full Name';
    textfield.placeHolder = 'John Doe';
    textfield.information = 'Please enter both first and last name';
    return textfield;
  }

  makeTitleViewTemplate(): TitleItem {
    const titleItem = new TitleItem();
    titleItem.itemType = 'titleview';
    titleItem.displayIcon = faParagraph;
    titleItem.displayName = 'Title View';
    titleItem.title = 'Application for employment';
    return titleItem;
  }

  makePhoneTitle(): PhoneItem {
      const phoneItem = new PhoneItem();
      phoneItem.itemType = 'phoneview';
      phoneItem.displayIcon = faPhone;
      phoneItem.displayName = 'Phone Number';
      phoneItem.title = 'Phone Number';
      phoneItem.areaCodePlaceHolder = '123';
      phoneItem.midNumsPlaceHolder = '456';
      phoneItem.lastNumsPlaceHolder = '7890';
      return phoneItem;
  }
}
