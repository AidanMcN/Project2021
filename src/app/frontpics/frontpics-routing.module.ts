import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontpicsPage } from './frontpics.page';

const routes: Routes = [
  {
    path: '',
    component: FrontpicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontpicsPageRoutingModule {}
