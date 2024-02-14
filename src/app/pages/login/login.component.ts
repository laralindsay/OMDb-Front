import { FormBuilder, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isLoading = false;
  value!: string;

  login() {
    this.isLoading = true;
  }
}
