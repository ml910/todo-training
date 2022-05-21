import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseEmployeesService } from './firebase-employees.service';
import { GETS_ALL_TEAM_MEMBER_DTO } from '../../../application/ports/secondary/dto/gets-all-team-member.dto-port';
import { ADDS_TEAM_MEMBER_DTO } from '../../../application/ports/secondary/dto/adds-team-member.dto-port';
import { GETS_ONE_TEAM_MEMBER_DTO } from '../../../application/ports/secondary/dto/gets-one-team-member.dto-port';

// TODO: repetitive issue - Lowgular adds wrong import for FireBase by default, corrected manually
// This ha
// Again ^

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseEmployeesService,
    {
      provide: GETS_ALL_TEAM_MEMBER_DTO,
      useExisting: FirebaseEmployeesService,
    },
    { provide: ADDS_TEAM_MEMBER_DTO, useExisting: FirebaseEmployeesService },
    { provide: GETS_ONE_TEAM_MEMBER_DTO, useExisting: FirebaseEmployeesService }
  ],
  exports: [],
})
export class FirebaseEmployeesServiceModule {}
