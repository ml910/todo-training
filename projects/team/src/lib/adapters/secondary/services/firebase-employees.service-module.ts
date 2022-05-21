import { NgModule } from '@angular/core';
// TODO: repetitive issue - Lowgular adds wrong import for FireBase by default, corrected manually
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseEmployeesService } from './firebase-employees.service';
import { GETS_ALL_TEAM_MEMBER_DTO } from '../../../application/ports/secondary/dto/gets-all-team-member.dto-port';
import { ADDS_TEAM_MEMBER_DTO } from '../../../application/ports/secondary/dto/adds-team-member.dto-port';

// This ha

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseEmployeesService,
    {
      provide: GETS_ALL_TEAM_MEMBER_DTO,
      useExisting: FirebaseEmployeesService,
    },
    { provide: ADDS_TEAM_MEMBER_DTO, useExisting: FirebaseEmployeesService }
  ],
  exports: [],
})
export class FirebaseEmployeesServiceModule {}
