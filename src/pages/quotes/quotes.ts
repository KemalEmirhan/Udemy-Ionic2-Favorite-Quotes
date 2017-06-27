import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: String, quotes: Quote[] , icon: String};

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
  private service: QuotesService) {
  }

  //Bu da bir baska yoludur.Yalniz bu method ile yaptigimizda ionViewDidLoad fonksiyonunda oldugu gibi ? operatorunu kullanmamiz gerekmiyor.
  ngOnInit() {
      this.quoteGroup = this.navParams.data;
  }

  //Bu 2. bir yoldur sayfalar arasi veri gondermenin
  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //   //Eger bu sekilde data'yi html sayfasinda goruntulemek istersek geleneksel yontem olan {{ quoteGroup.category | uppercase }}
  //   //seklinde degil, {{ quoteGroup?.category | uppercase }} bu sekilde yapariz.
  //   //Nedeni ise kullanmis oldugumuz ionViewDidLoad() fonksiyonu gerekli datayi sayfa dolduktan sonra cekiyor ama ionic ise bu datalari 
  //   //sayfa yuklenmeden(render) edilmeden bir sonraki sayfaya aktariyor.
  // }


    onAddToFavorites(selectedQuote: Quote) {
      const alert = this.alertCtrl.create({
        title: 'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to add the quote?',
        buttons: [
          {
            text: 'Yes, go ahead',
            handler: () => {
              console.log(selectedQuote);
              this.service.addQuoteToFavorites(selectedQuote);
            }
          },
          {
            text: 'No, I changed my mind!',
            role: 'cancel',
            handler: () => {
              console.log('Cancelled!');
            }
          }
        ]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote){
    return this.service.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote){
    return this.service.isQuoteFavorite(quote);
  }

}
