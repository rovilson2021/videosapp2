import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodPageRoutingModule } from './good-routing.module';

import { GoodPage } from './good.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodPageRoutingModule
  ],
  declarations: [GoodPage]
})
export class GoodPageModule {}
