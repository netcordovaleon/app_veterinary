import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { ButtonComponentModule } from '../../components/button/button.module';

@NgModule({
  declarations: [HomePage],
  imports: [ButtonComponentModule, IonicPageModule.forChild(HomePage)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
