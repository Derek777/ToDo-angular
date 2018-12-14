import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService} from '../data.service';
import { MyValidators } from '../validators'

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {  

  private newProjectForm: FormGroup;
  // private submitted = false;      //??????
  private show = false;
  private stages: Array<string>; 

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
        this.myValidator.emptyValidator        
      ],
      [this.myValidator.checkTitle.bind(this)]      
      ],
      projectTime: ['24', [
        Validators.required,         
        Validators.maxLength(3),
        Validators.pattern("^[0-9]+$")]     
      ],
      projectPriority: ['1', Validators.required],
      newStage: ['new stage', [
        Validators.required,
        Validators.minLength(3), 
        Validators.maxLength(300),        
        this.myValidator.emptyValidator] 
      ]
    });   
  }   
  
  get f() {     
    // console.log(this.newProjectForm.controls );
    return this.newProjectForm.controls;    
  }  
  
  toglle(){
    this.show = !this.show;
    if(!this.show){
      this.stages.push(this.newProjectForm.controls.newStage.value);
    }    
  }
 
  onChanged(title){    
    for(let i = 0; i<this.stages.length; i++){      
      if(this.stages[i] === title){                
       this.stages.splice(i, 1);   
       return;
      }
    }   
  } 

  onSubmit() {
    // this.submitted = true;  //????
    if (this.newProjectForm.invalid) {
      return;
    }
    // let stages = this.stages.map(i =>{
    //   return i.trim();
    // })
    this.data.createProject(this.newProjectForm.value, this.stages);
    // alert("ss");      
    this.router.navigate(['/']);
    // this.cd.detectChanges();
  }

}
