import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Phone} from "./phone";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private API_URL = "http://localhost:3000/api/phones";
  private printError = (error: any) => {console.log(error)};

  constructor(private httpClient: HttpClient) { }

  createPhone = (newPhone: Phone): Promise<void | Phone> =>
    this.httpClient.post(this.API_URL,newPhone)
      .toPromise()
      .then(res => {
        console.log('res');
        console.log(res);
        return res as Phone;
      })
      .catch(this.printError);

  getPhone = (phoneId: string): Promise<void | Phone> =>
    this.httpClient.get(`${this.API_URL}/${phoneId}`)
      .toPromise()
      .then(res => res as Phone)
      .catch(this.printError);

  getAllPhones = (): Promise<void | Phone[]> =>
    this.httpClient.get<Phone[]>(this.API_URL)
      .toPromise()
      .then(res => res as Phone[])
      .catch(this.printError);

  deletePhone = (phoneId: string): Promise<void | Phone> =>
    this.httpClient.delete(`${this.API_URL}/${phoneId}`)
      .toPromise()
      .then(res => res as Phone)
      .catch(this.printError);

  updatePhone = (phoneId: string, data: Phone): Promise<void | Phone> =>
    this.httpClient.put(`${this.API_URL}/${phoneId}`, data)
      .toPromise()
      .then(res => res as Phone)
      .catch(this.printError);

}
