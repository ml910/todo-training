import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { HomePageModule } from './pages/home.page-module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'pracownicy/:name',
    loadChildren: () => EmployeeDetailsPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
