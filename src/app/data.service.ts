import { Injectable, OnInit } from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import { projection } from '@angular/core/src/render3/instructions';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
 
  private callback;
  private projectsObject = new BehaviorSubject<any>({} as any);
  public projects = this.projectsObject.asObservable();
  private name: string = 'My_';
  

  constructor(private DB: LocalStorageService) { }

  ngOnInit() {
    
  }    

  getCount() {     
    // console.log(this.DB.lenght());
     return this.DB.lenght();    //jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
  }

  // onChange (callback) {
  //   this.callback = callback;
  //   console.log(this.callback );
  //   console.log(callback );
  // }

  getTitle (title: string) {
    // let y = this.name
    // console.log(title);
    return this.DB.get(this.name + title);
  }

  getAllTitles(){
    return this.DB.getAllTitle();
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
    newProject.newStage = stages.map(i => i.trim())
    newProject.projectTitle = newProject.projectTitle.trim();    
    this.DB.set(this.name + newProject.projectTitle, newProject)
    this.projectsObject.next(this.getCount()); 
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

