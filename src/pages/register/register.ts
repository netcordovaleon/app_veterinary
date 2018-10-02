import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
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
    this.buttonEnter = { ...this._setButton('secondary', false, false,  this._showModalSuccess.bind(this)), txt: 'registrar'}
  }
  

  private _showModalSuccess() {
    const modaloptions = {
      actions: [
      {
        action: () => void 0,
        color: 'secondary',
        showButton: true,
        text: 'ir a inicio',
      }
    ],
      description: 'Tu número ha sido registrado con éxito',
      imgs: '../../assets/svg/error.svg',
      title: '¡Excelente, Julianna!'
    }

    const successModal = this._modalCtrl.create('ModalMessageComponent', { options: modaloptions });
    successModal.present();
  };
}
