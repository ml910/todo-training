import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  EmployeeDetailsComponentModule,
  FirebaseEmployeesServiceModule,
} from '@team';
import { EmployeeDetailsPage } from './employee-details.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailsPage,
      },
    ]),
    FirebaseEmployeesServiceModule,
    EmployeeDetailsComponentModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
