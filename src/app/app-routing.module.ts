import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { OtherComponent } from './utilities/other/other.component';
import { AnimationsComponent } from './utilities/animations/animations.component';
import { ColorComponent } from './utilities/color/color.component';
import { NofoundComponent } from './nofound/nofound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { BorderComponent } from './utilities/border/border.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, title: 'login'},
  {
    path: '',component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: DashboardComponent, title: 'Dashboard'},
      {path: 'page1', component: Page1Component, title: 'Page 1'},
      {path: 'page2', component: Page2Component, title: 'Page 2'},
      {path: 'utilities',
        children: [
          // {path: 'colors', component: ColorComponent, title: 'Colors'},
          {path: 'colors/:type', component: ColorComponent, title: 'Colors', data: {key: 'test vlaue'}},
          {path: 'borders', component: BorderComponent, title: 'Borders'},
          {path: 'animations', component: AnimationsComponent, title: 'Animations'},
          {path: 'other', component: OtherComponent, title: 'Others'},
        ]},
      {path: '**', component: NofoundComponent, title: '404'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
