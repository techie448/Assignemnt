import { Component, OnInit } from '@angular/core';
import {Accessory} from "../accessory";
import {Phone} from "../phone";
import {PhoneService} from "../phone.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[PhoneService]
})
export class CreateComponent implements OnInit {

  accessory: Accessory = {
    _id: undefined,
      box: false,
      charger: false,
      earphone: false,
    };

  phone: Phone = {
    _id: undefined,
  brand: '',
  model: '',
  color: '',
  cost: 0,
  warranty: 0,
  accessory: this.accessory
}

  createdPhoneId: string;



  constructor(private phoneService: PhoneService, private router: Router) { }

  ngOnInit(): void {
  }

  public createPhone(phone: Phone):void {
    this.phoneService.createPhone(phone).then((phone: Phone) => {
      this.router.navigate(['/detail/'+phone._id])
    })
    ;

  }

  data = {
    header : {
      title: 'Add Phone',
      body: 'Add data to the form as per the mentioned labels'
    }
  }


}
