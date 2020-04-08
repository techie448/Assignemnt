import { Component, OnInit } from '@angular/core';
import {Phone} from "../phone";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PhoneService} from "../phone.service";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  phone: Phone;

  constructor(private phoneService: PhoneService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(switchMap ((params: Params) => this.phoneService.getPhone(params.get("phoneId"))))
      .subscribe((phone: Phone) => {
        this.phone = phone;
        this.data.header.body = 'Detailed specification for the phone listed below'
      });
  }

  public deletePhone(phone: string):void {
    this.phoneService.deletePhone(phone).then((phone: Phone) => {
      this.router.navigate(['/inventory'])
    })
    ;
  }
  data = {
    header : {
      title: 'Details',
      body: 'Please select a phone to view Details.'
    }
  }


}
