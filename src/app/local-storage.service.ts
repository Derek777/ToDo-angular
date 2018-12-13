import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  

  constructor() { }

  lenght():Number{
    // console.log('hello from LS');
     return localStorage.length;
  }

  set(key: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => { 
      try {
        localStorage.setItem(key, JSON.stringify(data));
        resolve();
      } catch (e) {
        console.error('Error saving to localStorage', e);
        reject();
      }
    });
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
