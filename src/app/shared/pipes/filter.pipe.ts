import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterText:string, columnName:string): any[] {
    if(filterText.length>1){
      return list.filter((o)=>(o[columnName] as string).toLowerCase().indexOf(filterText.toLowerCase())!=-1);
    }
    return list;
  }

}
