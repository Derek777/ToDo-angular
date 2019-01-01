import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService} from '../data.service';


@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent  {

  constructor(private data: DataService) { }

  @Input() stage: string;

  @Output() deleteStage = new EventEmitter();

    delete(title) {
      this.deleteStage.emit(title);
    }

}
