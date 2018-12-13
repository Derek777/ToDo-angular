import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class MyValidators {
    emptyValidator(control: FormControl){
        const pattern = /^\s*$/
        if(pattern.test(control.value)){         
            // console.log(control);
            return {empty: true}
        }
        return null;    
    }
}


