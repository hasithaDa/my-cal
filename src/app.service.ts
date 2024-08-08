import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  add(num1: number, num2: number) {
    return { 'Sum of the two Numbers is': num1 + num2 };
  }
  subtract(num1: number, num2: number) {
    return { 'Subtraction of the two Numbers is': num2 - num1 };
  }
  multiply(num1: number, num2: number) {
    return { 'Multification of the two Numbers is': num2 * num1 };
  }
  divide(num1: number, num2: number) {
    return { 'Division of the two Numbers is': num2 / num1 };
  }
}
