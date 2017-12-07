import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Tablesort'
})
export class TablesortPipe implements PipeTransform {

  transform(items: Array<any>, id: string): Array<any> {
      return items.filter(item => item.status === id || id=="All request");
}

}

@Pipe({
  name: 'Tablesort2'
})
export class Tablesort2Pipe implements PipeTransform {
  
    transform(items: Array<any>, id: string): Array<any> {
      return items.filter(item => item.IssuingCountry === id || id=="");
  }
  
  }

  @Pipe({
    name: 'Tablesort3',
    pure: false
  })
  export class Tablesort3Pipe implements PipeTransform {
    
      transform(items: Array<any>, id: string): Array<any> {
        if(id)
        id=id.toLowerCase();
              return items.filter(item => item.ApplicantName.toLowerCase().indexOf(id) !== -1 || id==""||id==null);
         
    }
    
    }

