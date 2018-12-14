import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService} from 'src/app/data.service';
// import { resolve } from 'path';

@Injectable({
    providedIn: 'root'
})

export class MyValidators {

    constructor(
        private data: DataService ,
    ) {}

    emptyValidator(control: FormControl){       
        const pattern = /^\s*$/
        if(pattern.test(control.value)){         
            // console.log(control);
            return {empty: true}
        }
        return null;    
    }

    checkTitle(control: FormControl): Promise<any> {
       
        return new Promise((resolve, reject) => {
            if(this.data.getTitle(control.value.trim())){
                resolve({checkTitle: true});
            } else {
                resolve(null);
            }
        })
    }
}


