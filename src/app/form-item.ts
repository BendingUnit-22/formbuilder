import {Form} from '@angular/forms';

export class FormItem {
  itemType: string;
  displayIcon: object;
  displayName: string;
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
  areaCodePlaceHolder: string;
  midNumsPlaceHolder: string;
  lastNumsPlaceHolder: string;
}
