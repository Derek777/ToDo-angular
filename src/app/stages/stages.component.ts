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

  @Output() deleteStage = new EventEmitter();

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

  delete(stage) {
    this.deleteStage.emit(stage);
  }

  edit(stage) {
    if (this.remixer) {
      this.stage = this.input.value;
    }
    this.remixer = !this.remixer;
  }

}
