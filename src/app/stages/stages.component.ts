import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DataService} from '../_services/data.service';
import { FormControl, Validators } from '@angular/forms';
import { MyValidators } from '../validators';


@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {

  private remixer: Boolean = false;
  private input;

  constructor(
    private data: DataService,
    private myValidator: MyValidators
  ) {}

  @Input() stage: string;
  @Input() titleProject: string;
  @Input() index: number;
  @Input() showEdit: boolean;

  @Output() deleteStage = new EventEmitter();
  @Output() delStage = new EventEmitter();

  ngOnInit() {
     this.input = new FormControl(
          this.stage, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(300),
          this.myValidator.emptyValidator,
          this.myValidator.longWords]
       );
  }

  get f() {
    return this.input;
  }

  delete() {
    this.deleteStage.emit(this.index);
    this.delStage.emit(this.stage);
  }

  edit(stage) {
    if (this.remixer) {
      this.stage = stage;
      this.data.editStage(this.titleProject, this.index, this.stage);
    }
    this.remixer = !this.remixer;
  }

}
