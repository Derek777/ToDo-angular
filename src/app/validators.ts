import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService} from 'src/app/_services/data.service';

@Injectable({
    providedIn: 'root'
})

export class MyValidators {

    constructor(
        private data: DataService ,
    ) {}

    emptyValidator(control: FormControl) {
        const pattern = /^\s*$/;
        if (pattern.test(control.value)) {
            return {empty: true};
        }
        return null;
    }

    availableCharacters(control: FormControl) {
        const pattern = /[,!\@#$%^\&*()=+|\\/\\\\]/;
        if (pattern.test(control.value)) {
            return {character: true};
        }
        return null;
    }

    checkTitle(control: FormControl): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.data.getTitle(control.value.trim())) {
                resolve({checkTitle: true});
            } else {
                resolve(null);
            }
        });
    }

    longWords(control: FormControl) {
        const pattern = /[^\s]{12,}/;
        if (pattern.test(control.value)) {
            return {word: true};
        }
        return null;
    }

}


