import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectComponent} from "./project/project.component";
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  {
    path : '',
    component: ProjectListComponent
  },
  {
    path : 'add',
    component: AddFormComponent
  },
  {
    path : 'projects/:project-title',
    component: ProjectComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
