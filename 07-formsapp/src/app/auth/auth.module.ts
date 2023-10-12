import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SwitchesPageComponent } from '../reactive/pages/switches-page/switches-page.component';


@NgModule({
  declarations: [
    RegisterPageComponent,
    SwitchesPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
