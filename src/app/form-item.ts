import {UUID} from 'angular2-uuid';

export class FormItem {
  uuid: string;
  itemType: string;
  displayName: string;
  constructor() {
    this.uuid = UUID.UUID();
  }

  newUUID(){
    this.uuid = UUID.UUID();
  }
}

export class HeaderItem extends FormItem{
    title: string;
    formUUID: string;
    qrcodeURL: string;
}
export class TextFieldItem extends FormItem {
  title: string;
  placeHolder: string;
  information: string;
}

export class TitleItem extends FormItem {
  title: string;
}

export class PhoneItem extends FormItem {
  title: string;
  placeHolder: string;
}
