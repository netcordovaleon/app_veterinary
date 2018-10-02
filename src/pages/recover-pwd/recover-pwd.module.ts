import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoverPwdPage } from './recover-pwd';

import { ButtonComponentModule } from '../../components/button/button.module';
import { InputComponentModule } from '../../components/input/input.module'

@NgModule({
  declarations: [
    RecoverPwdPage,
  ],
  imports: [
    ButtonComponentModule,
    InputComponentModule,
    IonicPageModule.forChild(RecoverPwdPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecoverPwdPageModule {}
