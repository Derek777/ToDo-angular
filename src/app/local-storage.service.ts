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

  getAllTitle(){
    let arr = [];
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      // console.log( localStorage.getItem( localStorage.key( i ) ) );
      arr.push(JSON.parse(localStorage.getItem( localStorage.key( i ) )));      
    }
    return arr;
  }

  deleteProject(projectTitle){
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
