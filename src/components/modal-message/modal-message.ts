import { IonicPage, NavParams } from 'ionic-angular';
import { Component, Input } from '@angular/core';

import { ModalOptions } from './modal-message.interface' 

@IonicPage()
@Component({
  selector: 'mp-modal-message',
  templateUrl: 'modal-message.html'
})
export class ModalMessageComponent {
  @Input() public options?: ModalOptions;
  public opts: any;

  constructor(private _params: NavParams) {}

  public ngOnInit() {
    const _params = this._params.get('options');
    this.opts = this.options || _params;
  }

}
