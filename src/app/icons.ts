import {faEdit, faQuoteLeft, faParagraph, faPhone} from '@fortawesome/free-solid-svg-icons';


export class Icons {

  icon(type: string) {
      switch (type) {
        case 'textfield':
          return faEdit;
        case 'titleview':
          return faParagraph;
        case 'phoneview':
          return faPhone;
        default:
          return faQuoteLeft;
      }
  }

}
