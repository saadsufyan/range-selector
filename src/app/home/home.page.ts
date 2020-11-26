import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itemValue = [];
  items = [
    {
      id : 1,
      start : 1,
      end: 10
    },
    {
      id : 20,
      start : 1,
      end: 50
    },
    {
      id : 3,
      start : 10,
      end: 100
    },
    {
      id : 4,
      start : 4,
      end: 40
    },
    {
      id : 5,
      start : 25,
      end: 75
    }
  ];
  constructor() {}

}
