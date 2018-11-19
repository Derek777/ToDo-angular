import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService} from '../data.service';



@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {  

  constructor(
    private router: Router,
    private data: DataService    
    ) { }
  private show = false;
  private stages;   
  
  profileForm = new FormGroup({
    projectTitle: new FormControl('New Project'),
    projectTime: new FormControl('24'),
    projectPriority: new FormControl('1'),
    newStage: new FormControl('new stage')
  });

  // this.profileForm.projectTitle.valueChanges.subscribe((value) => console.log(value));
 
  ngOnInit() {
    this.stages = this.data.basicStages();       
  }  
  
  toglle(){
    this.show = !this.show;
    if(!this.show){
      this.stages.push(this.profileForm.controls.newStage.value);
    }    
  }
 
  onChanged(title){    
    for(let i = 0; i<this.stages.length; i++){      
      if(this.stages[i] === title){                
       delete this.stages[i];
       console.log(i);
       return;
      }
    }   
  } 

  submit() {
    alert("ss");  
    // this.data.show(this.ffff);
    // this.data.someMethod();
    this.router.navigate(['/']);
  }

}
