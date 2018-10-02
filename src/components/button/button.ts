import { Component, Input } from '@angular/core';

interface Config {
  color?: string;
  disabled?: boolean;
  outline?: boolean;
  txt: string;
  action: () => void;
}

@Component({
  selector: 'mp-button',
  templateUrl: 'button.html'
})
export class ButtonComponent {
  @Input()
  public config: Config;
}
