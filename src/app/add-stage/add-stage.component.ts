import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MyValidators } from '../validators';


@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {

  private addStageForm: FormGroup;
  private show = false;

  constructor(
    private myValidator: MyValidators,
    private formBuilder: FormBuilder,
  ) { }

  @Output() addStage = new EventEmitter();


  ngOnInit() {
    this.addStageForm = this.formBuilder.group({
      stageText: ['new stage', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(300),
        this.myValidator.emptyValidator,
        this.myValidator.longWords
      ]] ,
    });
  }

  get f() {
    return this.addStageForm.controls;
  }

  toglle() {
    this.show = !this.show;
    if (!this.show) {
      const val = this.addStageForm.controls.stageText.value;
      this.addStage.emit(val);
    }
  }

}
