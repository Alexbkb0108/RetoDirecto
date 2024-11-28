import { Injectable, Logger } from '@nestjs/common';
const log = new Logger;

@Injectable()
export class OutputService {
  
  public calculateNumber(number: number): Record<string, any> {
    return {
      paridad: this.paridad(number),
      primalidad: this.primalidad(number),
      factorial: this.factorial(number),
      sumaEnteros: this.sumaEnteros(number),
      Factores: this.Factores(number),
      Fibonacci: this.Fibonacci(number),
    };
  }

  private paridad(num: number): string{
    return num % 2 === 0 ? 'Par' : 'Impar';
  }

  private primalidad(num: number): string{
    if(num <= 1) return 'No es primo'
    for (let i = 2; i <= Math.ceil(num/2); i++) {
      if (num % i === 0) return 'No es primo';
    }
    return 'Es primo';
  }

  private factorial(num: number): number{
    let factor: number = num;
    let index: number = num;
    for (let i = 1; i < index - 1; i++) {
      factor = (factor * (num - 1));
      num--; 
    }
    return factor;
  }

  private sumaEnteros(num: number): number{
    let suma: number = num;
    let index: number = num;
    for (let i = 0; i < index; i++) {
      num --;
      suma += num;
    }
    return suma;
  }

  private Factores(num: number): number[]{
    let numeros: number[] = [];
    for (let i = 1; i <= num; i++) {
      if( num % i === 0){
        numeros.push(i);
      }
    }
    return numeros;
  }

  private Fibonacci(num: number): number{
    let a = 0, b = 1, temp;
    for (let i = 2; i <= num; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
  return num === 0 ? a : b;
  }

}
