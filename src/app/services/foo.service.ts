import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooService {
  generateRandomNumber(): number {
    return Math.random();
  }
}
