import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyDatePickerModule } from 'mydatepicker';


import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ViewHeaderComponent } from './view-header/view-header.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    ViewHeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
