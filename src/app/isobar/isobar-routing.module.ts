import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsobarPage } from './isobar.page';

const routes: Routes = [
  {
    path: '',
    component: IsobarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsobarPageRoutingModule {}
