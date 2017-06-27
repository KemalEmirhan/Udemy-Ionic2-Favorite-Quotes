import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotePage } from './quote';

@NgModule({
  declarations: [
    QuotePage,
  ],
  imports: [
    IonicPageModule.forChild(QuotePage),
  ],
  exports: [
    QuotePage
  ]
})
export class QuotePageModule {}
