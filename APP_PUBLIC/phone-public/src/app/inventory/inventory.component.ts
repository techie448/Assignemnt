import { Component, OnInit } from '@angular/core';
import {PhoneService} from "../phone.service";
import {Phone} from "../phone";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [PhoneService]
})
export class InventoryComponent implements OnInit {
  phones: Phone[];
  constructor(private phoneService: PhoneService) { }


  ngOnInit(): void {
    this.phoneService.getAllPhones()
      .then((phones: Phone[]) => {
      this.phones = phones.map(phone => {
        return phone;
      });
      });
  }

  data = {
    header : {
      title: 'Browse our Inventory',
      body: 'All products are sold with double Warranty!'
    },
  }


}
