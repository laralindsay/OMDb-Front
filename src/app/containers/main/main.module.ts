import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
