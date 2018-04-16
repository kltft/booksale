import { Injectable } from '@angular/core';
import { Sale } from './sale';
import { SALES } from './mock-sales';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SalesService {
  sales: Sale[] = SALES;
  constructor() { }
  getSalesArray(): Sale[] {
    console.log(this.sales);
    return SALES;
  }

  getSales(): Observable<Sale[]> {
    return of(SALES);
  }
}
