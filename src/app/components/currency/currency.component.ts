import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/currencies.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html'
})
export class CurrencyComponent implements OnInit {
  myData: any;
  selectedCurrency1: string;
  selectedCurrency2: string;
  amount1: number;
  amount2: number;

  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
    this.myDataService.getData().subscribe((data) => {
      this.myData = data;
    });
  }

  getCurrencyKeys(): string[] {
    const allowedCurrencies = ['UAH', 'USD', 'GBP', 'EUR'];
    return Object.keys(this.myData.conversion_rates).filter(key => allowedCurrencies.includes(key));
  }

  calculateAmount1(): void {
    const rate1 = this.myData.conversion_rates[this.selectedCurrency1];
    const rate2 = this.myData.conversion_rates[this.selectedCurrency2];
    this.amount2 = +(this.amount1 * rate2 / rate1).toFixed(2);
    this.amount2 = isNaN(this.amount2) ? 0 : this.amount2;
  }

  calculateAmount2(): void {
    const rate1 = this.myData.conversion_rates[this.selectedCurrency1];
    const rate2 = this.myData.conversion_rates[this.selectedCurrency2];
    this.amount1 = +(this.amount2 * rate1 / rate2).toFixed(2);
    this.amount1 = isNaN(this.amount1) ? 0 : this.amount1;
  }
}

export class CurrencyModule {}
