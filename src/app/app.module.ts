import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DragulaModule} from 'ng2-dragula';
import {AngularDraggableModule} from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    DragulaModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
