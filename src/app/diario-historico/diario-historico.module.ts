import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioHistoricoPageRoutingModule } from './diario-historico-routing.module';

import { DiarioHistoricoPage } from './diario-historico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioHistoricoPageRoutingModule
  ],
  declarations: [DiarioHistoricoPage]
})
export class DiarioHistoricoPageModule {}
