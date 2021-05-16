import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontpicsPageRoutingModule } from './frontpics-routing.module';

import { FrontpicsPage } from './frontpics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrontpicsPageRoutingModule
  ],
  declarations: [FrontpicsPage]
})
export class FrontpicsPageModule {}
