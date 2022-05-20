import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseExamplesService } from './firebase-examples.service';
import { GETS_ALL_EXAMPLE_DTO } from '../../../application/ports/secondary/dto/gets-all-example.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseExamplesService,
    { provide: GETS_ALL_EXAMPLE_DTO, useExisting: FirebaseExamplesService },
  ],
  exports: [],
})
export class FirebaseExamplesServiceModule {}
