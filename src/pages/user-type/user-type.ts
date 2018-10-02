import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user-type',
  templateUrl: 'user-type.html',
})
export class UserTypePage {
  public buttonLogin: any;
  public buttonRegistrer: any;

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
    this.buttonLogin = { ...this._setButton('secondary', false, false,  this.signInLogin.bind(this)), txt: 'ingresar'}
    this.buttonRegistrer = { ...this._setButton('light', false, true,  this.signInRegister.bind(this)), txt: 'registrar'}
  }

  public signInLogin() {
    this._navCtrl.push('LoginPage');
  }
  
  public signInRegister() {
    this._navCtrl.push('RegisterPage');
  }
}
