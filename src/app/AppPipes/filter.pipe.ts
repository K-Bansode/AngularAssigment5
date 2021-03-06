import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string){
    if(value.length === 0 || filterString ==''){

      return value;
    }
    const users=[];
    for(const user of value){
          if(user['role']=== filterString){
            users.push(user);
          }

    }
    return users;
  }
    
  }


