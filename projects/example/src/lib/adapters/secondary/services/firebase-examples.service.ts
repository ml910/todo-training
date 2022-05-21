import { Injectable } from '@angular/core';

// For some reason, this import was re-added here by Lowgular while I was connecting the Examples lib to the about-us page
// import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GetsAllExampleListItemDtoPort } from '../../../application/ports/secondary/dto/gets-all-example-list-item.dto-port';
import { ExampleListItemDTO } from '../../../application/ports/secondary/dto/example-list-item.dto';

// TODO: This was created by Lowgular itself now,
// While the one below it - the uncommented one - was the one presented in the videos
// The Lowgular automatic import does not work, while the solution from the video does 100%
// Worth noting - This is an import that you would use for Firebase 7+, and the course is prepared for 6.1.5
// import { AngularFirestore } from '@angular/fire/compat/firestor';

// This one works, but had to be adjusted manually  to match v.6.1.5 of FireStore

@Injectable()
export class FirebaseExamplesService implements GetsAllExampleListItemDtoPort {
  constructor(private _client: AngularFirestore) {}

  // AND NOW IT DOES NOT THROW ERRORS - PERFECT!
  // Thank you for the update, yesterday it was not working yet (Friday and today it does (Saturday)
  getAll(): Observable<ExampleListItemDTO[]> {
    return this._client
      .collection<ExampleListItemDTO>('example-list')
      .valueChanges({ idField: 'id' });
  }
}
