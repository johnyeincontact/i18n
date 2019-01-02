import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AuthenticationService } from './authentication.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SkillsService } from './skills.service';
import {  HttpInterceptorModule} from "./http-interceptor";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent    
  ],

  imports: [
    
    HttpInterceptorModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],

  providers: [SkillsService, AuthenticationService],

  bootstrap: [AppComponent]
 
})

export class AppModule { }
