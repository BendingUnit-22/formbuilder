import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
 import {AngularDraggableModule} from 'angular2-draggable';
import { UiviewComponent } from './uiview/uiview.component';
import {DragulaModule} from 'ng2-dragula';
import { HeaderviewComponent } from './headerview/headerview.component';
import {FormsModule} from '@angular/forms';
import { TextfieldComponent } from './textfield/textfield.component';
import { EditorComponent } from './editor/editor.component';
import { TitleviewComponent } from './titleview/titleview.component';
import { PhoneviewComponent } from './phoneview/phoneview.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    UiviewComponent,
    HeaderviewComponent,
    TextfieldComponent,
    EditorComponent,
    TitleviewComponent,
    PhoneviewComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AngularDraggableModule,
    DragulaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
