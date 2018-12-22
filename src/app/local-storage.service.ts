import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  lenght(name):Number {
    const arr = [];
    for (let i = 0, len = localStorage.length; i < len; ++i) {
      if (localStorage.key( i ).substr(0, 3) === name) {
        arr.push(i);
      }
    }
    return arr.length;
  }

  getAllProjects(name){
    const arr = [];
    for ( let i = 0, len = localStorage.length; i < len; ++i ) {
      if (localStorage.key( i ).substr(0, 3) === name) {
        arr.push(JSON.parse(localStorage.getItem( localStorage.key( i ) )));
      }
    }
    return arr;
  }

  deleteProject(projectTitle) {
    localStorage.removeItem(projectTitle);
  }

  set(key: string, data: any) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
        console.error('Error saving to localStorage', e);
      }
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
