import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  private count: Number;
 
  // private xxx;

  constructor(private dataService: DataService) { 
   
  }

  ngOnInit() {
    // debugger;
    // this.count = this.dataService.getCount() ? this.dataService.getCount() : 0;
    this.count = this.dataService.getCount(); 
    

    this.dataService.onChange((lenght) => {   
      this.count = lenght;
    });   
    console.log(this.dataService);
    // this.dataService._params.subscribe(data => {
    //   this.xxx = data;
    // })
    
  }

  getCount(){
    this.count = this.dataService.getCount();
  }

  

}
