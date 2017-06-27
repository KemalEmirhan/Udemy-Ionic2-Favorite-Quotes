import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Toggle } from 'ionic-angular';
import { SettingsService } from "../../services/settings";


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor( private service: SettingsService ) {}

  onToggle(toggle: Toggle){
      this.service.setBackground(toggle.checked);
  }

  checkAltBackground() {
    return this.service.isAltBackground();
  }
 
}
