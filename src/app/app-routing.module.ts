import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { ContactUsPageModule } from './pages/contact-us.page-module';
import { AdminPageModule } from './pages/admin.page-module';

const routes: Routes = [
  // Added with Lowgular's 'Add page to routing'
  // TODO: HomePageModule had to be imported manually because Lowgular did not handle it
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'o-nas',
    loadChildren: () => AboutUsPageModule,
  },
  {
    path: 'pracownicy',
    loadChildren: () => EmployeesPageModule,
  },
  {
    path: 'pracownicy/:employeeId',
    loadChildren: () => EmployeeDetailsPageModule,
  },
  {
    path: 'kontakt',
    loadChildren: () => ContactUsPageModule,
  },
  {
    path: 'admin',
    loadChildren: () => AdminPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
