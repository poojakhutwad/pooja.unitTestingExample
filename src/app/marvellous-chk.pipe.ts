import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {
  transform(value: number, param: string): string {
    if( param == "Even"){
      if(value%2 == 0){
        return "It is Even number.";
      }
      else{
        return "It is not Even number.";
      }
    }

    if(param == "Odd"){
      if(value%2 != 0){
        return "It is Odd number.";
      }
      else{
        return "It is not Odd number.";
      }
    }

    if(param == "Perfect"){
      let sum = 0;
      for(let i = 1; i < value-1; i++){
        let rem = value % i;
        if(rem == 0){
          sum = sum + i;
        }
      }
      if(sum == value){
        return "It is Perfect number.";
      }
      else{
        return "It is not Perfect number.";
      }
    }

    if(param == "Prime"){
      let flag = 0;

      for(let i = 2; i < value; i++){
        if(value % i == 0){
          flag = 1;
          break;
        }
      }
      if( flag == 0){
        return "It is Prime number."
      }
      else{
        return "It is not Prime number.";
      }
    }
  }
}
