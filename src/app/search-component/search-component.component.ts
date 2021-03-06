import { Component, OnInit } from '@angular/core';
import { Booking } from '../classes/booking';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  private today:Object;
  bookingData: Booking;
  private origin: String;
  private selectedOrigin : string;
  private selectedDestination : string;   
  private searchStr: string;
  
  private searchData = {
    color : ['red','green','blue','cyan','magenta','yellow','black'],
    value : ['#f00' ,'#0f0','#00f','#fof','ff0','#000']
  }


  constructor() {
    this.today = {year: 2017, month: 1, day: 4};
    // this.dataService = completerService.local(this.searchData, 'color' , 'color');
  }

  observableSource = (keyword: any) => {
    return Observable.of(this.searchData.color);
  }

  ngOnInit() {
  }

  fromDateChanged($event){
    console.log($event);
    console.log(this.origin);
  }

  toDateChanged($event){

  }
}
