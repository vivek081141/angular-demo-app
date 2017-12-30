import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {routing} from "./app.routes";
import { FrameworkBodyComponent } from './fw/framework-body/framework-body.component';
import { FrameworkContentComponent } from './fw/framework-content/framework-content.component';
import { FrameworkTitleComponent } from './fw/framework-title/framework-title.component';
import { FrameworkFooterComponent } from './fw/framework-footer/framework-footer.component';
import { CountryComponent } from './country/country.component';
import { GreenDataService } from './services/green-data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FrameworkBodyComponent,
    FrameworkContentComponent,
    FrameworkTitleComponent,
    FrameworkFooterComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    //routing
  ],
  providers: [GreenDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
