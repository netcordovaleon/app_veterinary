import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public buttonAdd: any;

  constructor(private _navCtrl: NavController, public _modalCtrl: ModalController) {}

  private _setButton(color: string, disabled: boolean, outline: boolean, action?: () => void) {
    return {
      color,
      disabled,
      outline,
      action
    };
  }

  private _initValues() {
    this.buttonAdd = { ...this._setButton('secondary', false, false, this.addPet.bind(this)), txt: 'ingresar' };
  }

  public addPet() {
    this._navCtrl.push('HomePage');
  }

  public openProfilePet() {
    this._navCtrl.push('PetPage');
  }
}
