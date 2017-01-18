import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';
import { Ng2CompleterModule } from "ng2-completer";

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ViewHeaderComponent } from './view-header/view-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {TestComponentComponent} from './test-component/test-component.component';
import { HotelComponentComponent } from './hotel-component/hotel-component.component';
import { FlightResultComponent } from './flight-result/flight-result.component';


const appRoutes: Routes = [
  { path: 'searchComponent', component: SearchComponentComponent },
  { path: 'TestComponent',        component: TestComponentComponent },
  {path : 'hotel' , component : HotelComponentComponent},
  {path : 'flightResult' , component : FlightResultComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: SearchComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    ViewHeaderComponent,
    NavbarComponent,
    TestComponentComponent,
    HotelComponentComponent,
    FlightResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    RouterModule.forRoot(appRoutes),
    Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
