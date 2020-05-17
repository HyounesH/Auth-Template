import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './authentication/log-in/log-in.component';


export const appRouteList: Routes = [
  {
      path: 'login',
      component: LogInComponent
  },
  {
      path: 'aa',
      component: AppComponent
  },
  {
      path: '**',
      redirectTo: 'aa'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouteList)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
