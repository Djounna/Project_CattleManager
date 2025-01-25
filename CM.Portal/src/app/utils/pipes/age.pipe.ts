import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'age',
  standalone: false
})
export class AgePipe implements PipeTransform {
  transform(value: string): number {
    let currentYear = new Date().getFullYear();
    let dateOfBirth = new Date(value);
    let birthYear = dateOfBirth.getFullYear();

    return currentYear - birthYear;
  }
}
