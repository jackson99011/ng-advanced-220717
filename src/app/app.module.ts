import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NofoundComponent } from './nofound/nofound.component';
import { ColorComponent } from './utilities/color/color.component';
import { BorderComponent } from './utilities/border/border.component';
import { AnimationsComponent } from './utilities/animations/animations.component';
import { OtherComponent } from './utilities/other/other.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    Page1Component,
    DashboardComponent,
    NofoundComponent,
    ColorComponent,
    BorderComponent,
    AnimationsComponent,
    OtherComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
