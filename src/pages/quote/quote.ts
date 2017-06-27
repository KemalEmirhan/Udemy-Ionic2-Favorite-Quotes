import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
    person: String;
    text: String;

    constructor ( private viewCtrl: ViewController, private navParams: NavParams) {}

    ionViewDidLoad(){
      this.person = this.navParams.get('person');
      this.text = this.navParams.get('text');
    }

    onClose(remove = false){
      this.viewCtrl.dismiss(remove);
    }


}
