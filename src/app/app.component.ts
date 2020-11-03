import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApicallService } from './apicall.service';
import { ConversionRequest } from './conversion-request';
import { Conversion } from './conversion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exchangerate-fe';
  constructor(public http: HttpClient, private apiService: ApicallService){}

  ngOnInit(){
  }

  amount:number;
  chargeCurrency:string;
  depositCurrency:string;
  request:ConversionRequest;
  conversion:Conversion;
  getConversion() {
    this.request = new ConversionRequest();
    this.request.amount = this.amount;
    this.request.chargeCurrency = this.chargeCurrency;
    this.request.depositCurrency = this.depositCurrency;
    this.apiService
      .conversion(this.request)
      .subscribe((data:Conversion) => {
        console.log(data);
        this.conversion = data;
      });
  }
}
