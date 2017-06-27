import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";
import { SettingsService } from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(public service: QuotesService, private modalCtrl: ModalController, private settingService: SettingsService){}

  ionViewWillEnter(){
    this.quotes = this.service.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
      const modal = this.modalCtrl.create(QuotePage, quote);
      modal.present();
      modal.onDidDismiss((remove: boolean) => {
        if(remove) {
         this.onRemoveFromFavorites(quote);
        }
      });
  }

  onRemoveFromFavorites(quote: Quote){
      this.service.removeQuoteFromFavorites(quote);
      //this.quotes = this.service.getFavoriteQuotes();
       const position = this.quotes.findIndex((quoteEl: Quote) => {
           return quoteEl.id == quote.id;
      });
       this.quotes.splice(position, 1);
  }

  getBackground() {
      return this.settingService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
}
