import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodPage } from './good.page';

const routes: Routes = [
  {
    path: '',
    component: GoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodPageRoutingModule {}
