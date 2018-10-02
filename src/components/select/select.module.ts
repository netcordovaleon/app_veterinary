import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular/module';

import { SelectComponent } from './select';

@NgModule({
	declarations: [SelectComponent],
	exports: [SelectComponent],
	imports: [CommonModule, IonicModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectComponentModule {}