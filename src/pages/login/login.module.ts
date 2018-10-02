import { IonicPageModule } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginPage } from './login';

import { ButtonComponentModule } from '../../components/button/button.module';
import { InputComponentModule } from '../../components/input/input.module';

@NgModule({
  declarations: [LoginPage],
  imports: [ButtonComponentModule, InputComponentModule, IonicPageModule.forChild(LoginPage)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule {}
