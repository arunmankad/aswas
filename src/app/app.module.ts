import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgxElectronModule} from 'ngx-electron';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';


import { AppComponent } from './app.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SalesComponent } from './components/sales/sales.component';
import { ProductACComponent } from './components/product-ac/product-ac.component';
import { CompanyACComponent } from './components/company-ac/company-ac.component';

import {ProductService} from './services/product.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'purchase',
    component: PurchaseComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    SalesComponent,
    ProductACComponent,
    CompanyACComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true, // specifically for electron, else routing was not happening properly
        enableTracing: true  }, // <-- debugging purposes only
    ),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxElectronModule,
    Ng2AutoCompleteModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
