import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioHistoricoPage } from './diario-historico.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioHistoricoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioHistoricoPageRoutingModule {}
