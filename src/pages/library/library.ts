import { Component,OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from "../quotes/quotes";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  quotesPage = QuotesPage;
  
  quoteCollection: {category: String, quotes: Quote[] , icon: String}[];


  ngOnInit() {
    this.quoteCollection = quotes;
  }
}

