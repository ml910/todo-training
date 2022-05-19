import { EmployeesPage } from './employees.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeesPage,
      },
    ]),
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: [],
})
export class EmployeesPageModule {}
