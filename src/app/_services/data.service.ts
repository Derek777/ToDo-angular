import { Injectable, OnInit } from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  private name: String = 'My_';

  private projectsCountObject = new BehaviorSubject<any>({} as any);
  public projectsCount = this.projectsCountObject.asObservable();

  private projectTitlesObject = new BehaviorSubject<any>({} as any);
  public projectTitles = this.projectTitlesObject.asObservable();

  constructor(private DB: LocalStorageService) { }

  ngOnInit() {}

  getCount() {
     return this.DB.lenght(this.name);
  }

  getTitle (title: string) {
    return this.DB.get(this.name + title);
  }

  getAllProjects() {
    return this.DB.getAllProjects(this.name);
  }

  basicStages(): string[] {
    return new Array(
      'start of the project',
      'work on the project',
      'end of the project'
    );
  }

  getStages(title) {
    return this.getTitle(title).newStage;
  }

  createProject(newProject, stages) {
    newProject.newStage = stages.map(i => i.trim());
    newProject.projectTitle = newProject.projectTitle.trim();
    newProject.date = new Date().getTime();
    newProject.timer = null;
    this.DB.set(this.name + newProject.projectTitle, newProject);
    this.projectsCountObject.next(this.getCount());
  }

  updateProjectStages(title, stages) {
    const updateProject = this.getTitle(title);
    updateProject.newStage = stages;
    this.deleteProject(title);
    this.DB.set( this.name + title, updateProject);
    this.projectsCountObject.next(this.getCount());
  }

  deleteProject(projectTitle: string) {
    this.DB.deleteProject(this.name + projectTitle);
    this.projectTitlesObject.next(this.getAllProjects());
    this.projectsCountObject.next(this.getCount());
  }

  editStage(title, index, stage) {
    const project = this.getTitle(title);
    project.newStage[index] = stage;
    this.updateProjectStages(title, project.newStage);
  }

}

