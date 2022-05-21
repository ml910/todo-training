import { FirebaseEmployeesServiceModule } from './../../secondary/services/firebase-employees.service-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './our-team.component';

@NgModule({
  imports: [
    CommonModule,
    // TODO: This had to be added manually -
    // Lowgular does not dots to import for secondary adapters that are used inside the lib it seems,
    // it happened 3rd time today
    FirebaseEmployeesServiceModule,
  ],
  declarations: [OurTeamComponent],
  providers: [],
  exports: [OurTeamComponent],
})
export class OurTeamComponentModule {}
