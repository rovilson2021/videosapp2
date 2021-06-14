import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimpsonsPageRoutingModule } from './simpsons-routing.module';

import { SimpsonsPage } from './simpsons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimpsonsPageRoutingModule
  ],
  declarations: [SimpsonsPage]
})
export class SimpsonsPageModule {}
