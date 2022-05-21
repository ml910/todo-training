import { NgModule } from '@angular/core';
// This ha
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseEmployeesService } from './firebase-employees.service';
import { GETS_ALL_TEAM_MEMBER_DTO } from '../../../application/ports/secondary/dto/gets-all-team-member.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseEmployeesService,
    {
      provide: GETS_ALL_TEAM_MEMBER_DTO,
      useExisting: FirebaseEmployeesService,
    },
  ],
  exports: [],
})
export class FirebaseEmployeesServiceModule {}
