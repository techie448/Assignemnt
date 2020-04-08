import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = {
    header : {
      title: 'About our Store',
      body: 'We sell only Apple Products with double the Warranty!'
    }
  }

}
