import { EmployeeDetailsPage } from './employee-details.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailsPage,
      },
    ]),
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
