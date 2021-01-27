import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasestudiesPageRoutingModule } from './casestudies-routing.module';

import { CasestudiesPage } from './casestudies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasestudiesPageRoutingModule
  ],
  declarations: [CasestudiesPage]
})
export class CasestudiesPageModule {}
