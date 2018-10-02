import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

import { ButtonComponentModule } from '../../components/button/button.module';
import { InputComponentModule } from '../../components/input/input.module';
import { SelectComponentModule } from '../../components/select/select.module'
import { ModalMessageModule } from '../../components/modal-message/modal-message.module'

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    ButtonComponentModule,
    InputComponentModule,
    IonicPageModule.forChild(RegisterPage),
    SelectComponentModule,
    ModalMessageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterPageModule {}
