import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data = [
    { name: 'Apple iPhone 7', price: 56000},
    { name: 'zago Elite x3', price: 56000},
    { name: 'Alcatel Idol S4', price: 25000}
  ];
  getData() {
    return this.data;
  }
}

