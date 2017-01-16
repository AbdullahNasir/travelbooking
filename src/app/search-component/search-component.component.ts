import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  private today:Object;

  constructor() {
    this.today = {year: 2017, month: 1, day: 4}
  }

  ngOnInit() {
  }

  onDateChanged($event){
    console.log(this.today);
  }

}
