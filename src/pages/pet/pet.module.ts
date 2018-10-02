import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetPage } from './pet';

import { InputComponentModule } from '../../components/input/input.module';

@NgModule({
  declarations: [PetPage],
  imports: [InputComponentModule, IonicPageModule.forChild(PetPage)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PetPageModule {}
