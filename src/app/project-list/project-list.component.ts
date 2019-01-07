import { Component, OnInit } from '@angular/core';
import { DataService} from '../_services/data.service';
import { ModalService } from '../_services/modal.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  private projects;
  private projectTitle;

  private modalWindow = new BehaviorSubject<any>({} as any); // count in Header
  public modal = this.modalWindow.asObservable();

  constructor(
    private data: DataService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.data.projectTitles.subscribe(data => {
      this.projects = data;
    });
    this.projects = this.data.getAllProjects();
  }

  deleteProject(title) {
    this.projectTitle = title;
  }

  sortProjects(a, b) {
    if ( a.projectPriority > b.projectPriority) {
      return 1;
     }
    if ( a.projectPriority < b.projectPriority) {
      return -1;
     }
  }

  closeModal(id: string) {
    this.projects.forEach((element, index, arr) =>  {
      if (element.projectTitle === this.projectTitle) {
        arr.splice(index, 1);
        this.data.deleteProject(this.projectTitle);
      }
    });
    this.modalService.close(id);
  }

  cancel(id: string) {
    this.modalService.close(id);
  }

 }
