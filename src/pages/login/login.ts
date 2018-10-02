import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public buttonEnter: any;
  
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
    this.buttonEnter = { ...this._setButton('secondary', false, false,  this.signIn.bind(this)), txt: 'ingresar'}
  }
  
  public signIn() {
    this._navCtrl.push('HomePage');
  }

  public signInPassword() {
    this._navCtrl.push('RecoverPwdPage');
  }
}
