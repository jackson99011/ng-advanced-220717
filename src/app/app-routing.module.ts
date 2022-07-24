import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NofoundComponent } from './nofound/nofound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AuthGuard } from './auth.guard';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, title: 'login'},
  {path: 'login2', component: Login2Component, title: 'login2'},
  {
    path: '',component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: DashboardComponent, title: 'Dashboard'},
      {path: 'page1', component: Page1Component, title: 'Page 1'},
      {path: 'page2', component: Page2Component, title: 'Page 2'},
      {
        path: 'utilities',
        canActivate: [AuthGuard],
        loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule)
      },
      // {path: '**', component: NofoundComponent, title: '404'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    //preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
