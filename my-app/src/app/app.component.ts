import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import { CustomerServiceService } from './customer-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private CustomerService: CustomerServiceService) { }

  ngOnInit() {
    this.getCustomers();
  }

  title = 'Guest';
  
  customers: Customer[];
  
  getCustomers(): void {
    this.CustomerService.getCustomers()
    .subscribe(heroes => this.customers = heroes);
  }
}
