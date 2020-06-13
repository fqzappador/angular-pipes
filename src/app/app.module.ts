import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEn from '@angular/common/locales/en';
import localFr from '@angular/common/locales/fr';
import localEs from '@angular/common/locales/es';

// the second parameter 'en-EN' or 'fr-FR' or 'es-EN is optional
registerLocaleData(localEn);
registerLocaleData(localFr);
registerLocaleData(localEs);

import { AppComponent } from './app.component';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    DomsafePipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
