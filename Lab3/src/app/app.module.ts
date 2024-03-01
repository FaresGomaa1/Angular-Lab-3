import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './parent/product/product.component';
import { TabelComponent } from './parent/tabel/tabel.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ProductComponent,
    TabelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
