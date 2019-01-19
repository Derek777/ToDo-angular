import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService} from '../_services/data.service';
import { ModalService } from '../_services/modal.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, AfterViewInit {

  public projects;
  public projectTitle;

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

  ngAfterViewInit() {
    if (this.projects.length === 0) {
      this.modalService.open('custom-modal-2');
    }
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
