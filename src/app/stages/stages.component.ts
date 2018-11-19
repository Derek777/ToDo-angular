import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService} from '../data.service';


@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent  {

  constructor(private data: DataService) { }

  @Input() stage: string

  // @Output() del = new EventEmitter();
  //   delStage(title) {
  //       this.del.emit(title);
  //   }

  @Output() onChanged =new EventEmitter()
    change(title) {
      this.onChanged.emit(title);
    }
  

}
