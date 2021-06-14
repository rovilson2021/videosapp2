import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentaPage } from './menta.page';

const routes: Routes = [
  {
    path: '',
    component: MentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentaPageRoutingModule {}
