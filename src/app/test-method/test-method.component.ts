import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-method',
  templateUrl: './test-method.component.html',
  styleUrls: ['./test-method.component.css']
})
export class TestMethodComponent implements OnInit {
  count: number = 0;
  flag : number = 0;
  sum : number = 0;
  constructor() { }

  ngOnInit() {
  }

  CountCapital(str: string): number{
    let len = str.length;
    for(var i=0;i<len;i++) {
      if(/[A-Z]/.test(str.charAt(i))) 
      this.count++;
    }
    return this.count;
  }

  CheckPassword(str: string):any{
     let len = str.length;
     let capitalCount = 0;
     let smallCount = 0;
     let digitCount = 0;
     let specialCount = 0;
     
     for(var i = 0; i < len; i++){
       if(/[A-Z]/.test(str.charAt(i))){
         capitalCount++;
       }
       if(/[a-z]/.test(str.charAt(i))){
         smallCount++;
       }
       if(/[0-9]/.test(str.charAt(i))){
         digitCount++;
       }
       if(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str.charAt(i))){
         specialCount++;
       }
     }

     if((capitalCount >= 2) && (smallCount >= 3) && (digitCount >= 2) && (specialCount >= 1)){
      this.flag = 1; 
      return this.flag;
     }
     else{
       return this.flag;
     }
  }

  ArrayAddition(arrayNumbers: number[]): number{
     let len = arrayNumbers.length;

     for( let i = 0; i < len; i++){
       this.sum = this.sum + arrayNumbers[i];
     }
     return this.sum;
  }
}