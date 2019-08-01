import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalestranteAddComponent } from './palestrante-add/palestrante-add.component';
import { PalestranteGetComponent } from './palestrante-get/palestrante-get.component';
import { PalestranteEditComponent } from './palestrante-edit/palestrante-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PalestranteAddComponent,
    PalestranteGetComponent,
    PalestranteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
