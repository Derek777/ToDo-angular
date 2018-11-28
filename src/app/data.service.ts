import { Injectable } from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import { projection } from '@angular/core/src/render3/instructions';

// export interface Project {
//   title: string;  
// }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private LS: LocalStorageService) { }
  private count: Number = 5;
  getCount() {
    return this.count;  // треба дописати
  }

  exist(){
    //реалізувати
  }

  show(item){
    console.log(item);
  }

  basicStages():string[]{   
    return new Array(
      "start of the project",
      "work on the project",
      "end of the project"
    )    
  }
  
  createProject(newProject, stages){
    console.log(newProject);
    console.log(stages);
  }
  add(){}//
  delete(){}//
  get(){}//
  edit(){}//

  // private data = [
  //   { name: 'Apple iPhone 7', price: 56000},
  //   { name: 'zago Elite x3', price: 56000},
  //   { name: 'Alcatel Idol S4', price: 25000}
  // ];
  // getData() {
  //   return this.data;
  // }

  

  // someMethod() {
  //   const myData = {foo: 'bar'};
  //   this.LS.set('SOME_KEY', myData);
  // }

  // someOtherMethod() {
  //   const myData = this.LS.get('SOME_KEY');
  // }
}

