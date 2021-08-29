import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestProductCardComponent } from './shared/test-product-card/test-product-card.component';
import { TestButtonComponent } from './shared/test-button/test-button.component';
import { TestSearchBarComponent } from './shared/test-search-bar/test-search-bar.component';
import { TestLoadingComponent } from './shared/test-loading/test-loading.component';
import { TestFavModalComponent } from './shared/test-fav-modal/test-fav-modal.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './pages/header/header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    TestProductCardComponent,
    TestButtonComponent,
    TestSearchBarComponent,
    TestLoadingComponent,
    TestFavModalComponent,
    LandingComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
