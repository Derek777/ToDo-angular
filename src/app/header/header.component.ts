import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private count: Number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.count = this.dataService.getCount();    
  }

}
