import { Component, OnInit } from '@angular/core';
import {Accessory} from "../accessory";
import {Phone} from "../phone";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PhoneService} from "../phone.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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

  constructor(private phoneService: PhoneService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(switchMap ((params: Params) => this.phoneService.getPhone(params.get("phoneId"))))
      .subscribe((phone: Phone) => {
        this.phone = phone;
        this.data.header.body = 'Updates the details below as per your requirement'
      });
  }

  public updatePhone(phone: Phone):void {
    this.phoneService.updatePhone(this.phone._id,phone).then((phone: Phone) => {
      this.router.navigate(['/detail/'+phone._id])
    })
    ;
  }

  data = {
    header : {
      title: 'Update Phone',
      body: 'Please select a phone to Update.'
    }
  }

}
