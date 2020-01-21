import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'agePipe',
    pure: true
})

export class AgePipe implements PipeTransform {
    transform(input: number) {
        const presentYear = new Date().getFullYear();
        const birthYear = new Date(input).getFullYear();
        const age = presentYear - birthYear;
        return age + 'Years';
    }
}
