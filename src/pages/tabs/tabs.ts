import { Component } from '@angular/core';
import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";

//Asagida tanimladigimiz template icerisindeki ion-tabs tag'inde ilk yazdigimiz ion-tab'i secili olarak gelir.
//Bu default ozelliktir.
//Eger bunu degistirmek istiyorsak <ion-tabs selectedIndex="gostermek istedigin tab'in indexi"> seklinde yazilir.
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs selectedIndex="0">
        <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
        <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class  TabsPage {

  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
}
