import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { CardPageComponent } from './card-page.component';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CardRoutingModule
  ],
  declarations: [CardPageComponent]
})
export class CardModule { }
