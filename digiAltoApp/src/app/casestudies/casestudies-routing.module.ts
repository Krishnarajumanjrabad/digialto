import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasestudiesPage } from './casestudies.page';

const routes: Routes = [
  {
    path: '',
    component: CasestudiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasestudiesPageRoutingModule {}
