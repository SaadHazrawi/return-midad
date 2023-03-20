import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'paresToSpace'
})

export class ConvertToSpacePipe implements PipeTransform {
    transform(value: string ,char:string ): string {
        return value.replace(char,' ')
    }
}