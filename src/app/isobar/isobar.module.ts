import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsobarPageRoutingModule } from './isobar-routing.module';

import { IsobarPage } from './isobar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsobarPageRoutingModule
  ],
  declarations: [IsobarPage]
})
export class IsobarPageModule {}
