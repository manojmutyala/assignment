import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    const CUSTOMER: Customer[] = [
      {
        customerId: 1008523,
        firstName: 'Maneendra',
        lastName: 'Ramanapudi',
        email: 'test@test.com',
        address: 'JPMorgan, Hyderabad, PIN-500032',
        phoneNo: 7095157187,
        dob: '01/02/1992'
      },
      {
        customerId: 1008525,
        firstName: 'Manoj',
        lastName: 'Mutyala',
        email: 'manoj@test.com',
        address: 'TechM, Hyderabad, PIN-500032',
        phoneNo: 8886888002,
        dob: '12/02/1992'
      }
    ]
    return of(CUSTOMER);
  }
}
