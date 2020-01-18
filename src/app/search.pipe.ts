import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searching'
})
export class SearchPipe implements PipeTransform {
    transform(input, arg) {
        if (!input || !arg) {
            return input;
        }
        return input.filter(item => {
            return JSON.stringify(item).toLowerCase().includes(arg.toLowerCase());
        })
    }
}
