import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home-search',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  templateUrl: './home-search.component.html',
  styleUrl: './home-search.component.scss'
})
export class HomeSearchComponent {

}
