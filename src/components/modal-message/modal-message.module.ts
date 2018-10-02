import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';

import { ModalMessageComponent } from './modal-message';

@NgModule({
  declarations: [ModalMessageComponent],
  exports: [ModalMessageComponent],
  imports: [IonicPageModule.forChild(ModalMessageComponent), IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalMessageModule {}
