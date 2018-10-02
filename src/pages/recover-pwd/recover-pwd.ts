import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recover-pwd',
  templateUrl: 'recover-pwd.html',
})
export class RecoverPwdPage {
  public buttonRecoverPwd: any;
  
  constructor(
    private _modalCtrl: ModalController,
    private _navCtrl: NavController 
  ) {}

  public ngOnInit() {
    this._initValues()
  }

  private _setButton(color: string, disabled: boolean, outline: boolean, action?: () => void) {
    return {
      color,
      disabled,
      outline,
      action,
    }
  }

  private _initValues() {
    this.buttonRecoverPwd = { ...this._setButton('secondary', false, false,  this.signIn.bind(this)), txt: 'Recuperar'}
  }
  
  public signIn() {
    this._navCtrl.push('HomePage');
  }
}
