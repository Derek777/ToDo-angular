import { Injectable, OnInit } from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import { projection } from '@angular/core/src/render3/instructions';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

// export interface Project {
//   title: string;  
// }

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
 
  private callback;
  private _paramSubject = new BehaviorSubject<any>({} as any);
  public _params = this._paramSubject.asObservable();
  

  constructor(
    private DB: LocalStorageService         
    ) { }

  ngOnInit() {
    
  }  
  // private count: Number = 5;
 

  

  getCount() {    
    // return this.DB.len.subscribe()
     return this.DB.lenght();    
  }

  onChange (callback) {
    this.callback = callback;
    console.log(this.callback );
    console.log(callback );
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
    // console.log(newProject);
    // console.log(stages);
    newProject.newStage = stages
    console.log(newProject);
    this.DB.set(newProject.projectTitle, newProject).then(function (event) {     
      this.callback(this.DB.lenght());
    }.bind(this));
   this._paramSubject.next(this.getCount())
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

