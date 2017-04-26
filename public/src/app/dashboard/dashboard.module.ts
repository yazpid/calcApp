import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import {SettingsComponent} from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SettingsComponent
  ],
  exports: [
    SettingsComponent
  ]
})
export class DashboardModule { }
