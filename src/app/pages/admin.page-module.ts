import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CreateTeamMemberComponentModule,
  FirebaseEmployeesServiceModule,
} from '@team';
import { AdminPage } from './admin.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
      },
    ]),
    CreateTeamMemberComponentModule,
    FirebaseEmployeesServiceModule,
  ],
  declarations: [AdminPage],
  providers: [],
  exports: [],
})
export class AdminPageModule {}
