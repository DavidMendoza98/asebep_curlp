import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data_db: readonly any[], cuenta:string): any {
    const dato = data_db.find((element: { nombre: string; }) => element.nombre === cuenta);
    return [dato]
  }

}
