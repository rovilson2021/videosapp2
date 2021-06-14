import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpsonsPage } from './simpsons.page';

const routes: Routes = [
  {
    path: '',
    component: SimpsonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpsonsPageRoutingModule {}
