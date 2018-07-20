import { Injectable } from '@angular/core';
import {FormItem, HeaderItem, PhoneItem, TextFieldItem, TitleItem} from './form-item';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormItemService {

  formTemplate: FormItem[] = [];
  formItems: FormItem[] = [];

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
    header.displayName = 'Header';
    header.title = 'New Patient Form';
    header.formUUID = header.uuid;
    header.qrcodeURL = 'qr.png';
    return header;
  }

  makeTextFieldTemplate(): TextFieldItem {
    const textfield = new TextFieldItem();
    textfield.itemType = 'textfield';
    textfield.displayName = 'Text Field';
    textfield.title = 'Full Name';
    textfield.placeHolder = 'Jon Snow';
    textfield.information = 'Please enter both first and last name';
    return textfield;
  }

  makeTitleViewTemplate(): TitleItem {
    const titleItem = new TitleItem();
    titleItem.itemType = 'titleview';
    titleItem.displayName = 'Title View';
    titleItem.title = 'Patient information';
    return titleItem;
  }

  makePhoneTitle(): PhoneItem {
      const phoneItem = new PhoneItem();
      phoneItem.itemType = 'phoneview';
      phoneItem.displayName = 'Phone Number';
      phoneItem.title = 'Phone Number';
      phoneItem.placeHolder = '413-123-4563';
      return phoneItem;
  }
}
