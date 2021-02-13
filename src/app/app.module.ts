import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { HomeComponent } from './components/home/home.component';
import { RecentNewsComponent } from './components/recent-news/recent-news.component';
import { OlderNewsComponent } from './components/older-news/older-news.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { TextShortenPipe } from './pipes/text-shorten.pipe';
import { PresentationCommissionComponent } from './components/presentation-commission/presentation-commission.component';
import { PresentationLiensComponent } from './components/presentation-liens/presentation-liens.component';
import { PresentationMinistreComponent } from './components/presentation-ministre/presentation-ministre.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RecentNewsComponent,
    OlderNewsComponent,
    SafeUrlPipe,
    FooterComponent,
    TextShortenPipe,
    PresentationCommissionComponent,
    PresentationLiensComponent,
    PresentationMinistreComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faTimesCircle);
  }

}
