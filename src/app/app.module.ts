import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DigitalEyePageComponent } from './pages/digital-eye-page/digital-eye-page.component';
import { ShoppingListPageComponent } from './pages/shopping-list-page/shopping-list-page.component';
import { NavigationPageComponent } from './pages/navigation-page/navigation-page.component';
import { BottomButtonsComponent } from './shared/bottom-buttons/bottom-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DigitalEyePageComponent,
    ShoppingListPageComponent,
    NavigationPageComponent,
    BottomButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
