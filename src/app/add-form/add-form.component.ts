import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService} from '../_services/data.service';
import { MyValidators } from '../validators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {

  private newProjectForm: FormGroup;
  private show = false;
  private stages: Array<string>;

  // private projectsStages = new BehaviorSubject<any>({} as any); // count in Header
  // public stages = this.projectsStages.asObservable();

  constructor(
    private router: Router,
    private data: DataService ,
    private formBuilder: FormBuilder,
    private myValidator: MyValidators
  ) {}

  ngOnInit() {
    this.stages = this.data.basicStages();

    this.newProjectForm = this.formBuilder.group({
      projectTitle: ['New Project', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        this.myValidator.emptyValidator,
        this.myValidator.availableCharacters,
        this.myValidator.longWords
      ],
      [this.myValidator.checkTitle.bind(this)]
      ],
      projectTime: ['24', [
        Validators.required,
        Validators.maxLength(3),
        Validators.pattern('^[1-9][0-9]*')]
      ],
      projectPriority: [ 5, Validators.required],
      // newStage: ['new stage', [
      //   Validators.required,
      //   Validators.minLength(3),
      //   Validators.maxLength(300),
      //   this.myValidator.emptyValidator]
      // ]
    });
  }

  get f() {
    return this.newProjectForm.controls;
  }

  toglle() {
    this.show = !this.show;
    if (!this.show) {
      this.stages.push(this.newProjectForm.controls.newStage.value);
    }
  }

  deleteStage(title) {
    console.log(title);
    for (let i = 0; i < this.stages.length; i++) {
      if (this.stages[i] === title) {
       this.stages.splice(i, 1);
       return;
      }
    }
  }

  addStage(stage) {
    this.stages.push(stage);
  }

  onSubmit() {
    if (this.newProjectForm.invalid) {
      return;
    }
    this.data.createProject(this.newProjectForm.value, this.stages);
    this.router.navigate(['/']);
  }

}
