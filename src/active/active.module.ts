import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/shared/shared.module';
import { ActiveUserComponent } from './active-user/active-user.component';

@NgModule({
  declarations: [
    ActiveUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ActiveModule { }
