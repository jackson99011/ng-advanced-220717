import { OtherComponent } from './other/other.component';
import { AnimationsComponent } from './animations/animations.component';
import { BorderComponent } from './border/border.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';

const routes: Routes = [
  {
    path: 'colors/:type',
    component: ColorsComponent,
    data: { key: 'value' },
  },
  {path: 'borders', component: BorderComponent, title: 'Border'},
  {path: 'animations', component: AnimationsComponent, title: 'Animations'},
  {path: 'other', component: OtherComponent, title: 'Other'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
