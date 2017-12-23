import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {routing} from "./app.routes";
import { FrameworkBodyComponent } from './fw/framework-body/framework-body.component';
import { FrameworkContentComponent } from './fw/framework-content/framework-content.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FrameworkBodyComponent,
    FrameworkContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    //routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
