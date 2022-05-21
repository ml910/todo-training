import { NgModule } from '@angular/core';
// TODO: This was created by Lowgular, but it is an import that would work with v7+ and the course is done in v6.1.5
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// This one was added manually to work with v.6.1.5
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseExamplesService } from './firebase-examples.service';
import { GETS_ALL_EXAMPLE_LIST_ITEM_DTO } from '../../../application/ports/secondary/dto/gets-all-example-list-item.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseExamplesService,
    {
      provide: GETS_ALL_EXAMPLE_LIST_ITEM_DTO,
      useExisting: FirebaseExamplesService,
    },
  ],
  exports: [],
})
export class FirebaseExamplesServiceModule {}
