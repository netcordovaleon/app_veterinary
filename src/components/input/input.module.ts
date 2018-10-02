import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular/module';

import { InputComponent } from './input';

@NgModule({
	declarations: [InputComponent],
	exports: [InputComponent],
	imports: [CommonModule, IonicModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputComponentModule {}
