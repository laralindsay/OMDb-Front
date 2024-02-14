import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Provider, forwardRef } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MovieService } from '@app/services/movie-service.service';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [HttpClientModule, MovieService ]
})
export class MainModule {}
