import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserTypePage } from './user-type';

import { ButtonComponentModule } from '../../components/button/button.module';

@NgModule({
  declarations: [
    UserTypePage,
  ],
  imports: [
    ButtonComponentModule,
    IonicPageModule.forChild(UserTypePage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserTypePageModule {}
