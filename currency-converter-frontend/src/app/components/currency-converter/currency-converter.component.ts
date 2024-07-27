import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent implements OnInit {
  form: FormGroup;
  currencies = ['USD', 'EUR', 'GBP', 'INR', 'AUD']; // Add more as needed
  conversionResult: number | null = null;
  loading = false;

  constructor(private fb: FormBuilder, private currencyService: CurrencyService) {
    this.form = this.fb.group({
      fromCurrency: [''],
      toCurrency: [''],
      amount: [1]
    });
  }

  ngOnInit(): void {}

  convertCurrency(): void {
    const { fromCurrency, toCurrency, amount } = this.form.value;
    this.loading = true;
    this.currencyService.getConversionRate(fromCurrency, toCurrency).subscribe(
      data => {
        const rate = data.data[toCurrency];
        this.conversionResult = rate * amount;
        this.loading = false;
      },
      error => {
        console.error('Error fetching conversion rate', error);
        this.loading = false;
      }
    );
  }
}

