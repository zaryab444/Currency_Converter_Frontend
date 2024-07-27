import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCheckboxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'currency-converter-frontend';
}
