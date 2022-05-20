import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { GetsAllExampleDtoPort } from '../../../application/ports/secondary/dto/gets-all-example.dto-port';
import { ExampleDTO } from '../../../application/ports/secondary/dto/example.dto';

// This import had to be done manually, but then instruction manual is blank,
// Video 1 has the option with criterion and the other one does not have any params inside getAll.
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseExamplesService implements GetsAllExampleDtoPort {
  constructor(private _client: AngularFirestore) {}

  // Default solution, it one breaks the app
  getAll(): Observable<ExampleDTO[]> {
    return of([
      {
        id: 'fake',
        name: 'abc',
        description: 'asd',
        imageUrl: 's',
      },
    ]);
  }

  // This is the solution from the video, manually adjusted to include filterCriterion
  // Error:
  //  Type 'Observable<unknown>' is missing the following properties from
  // type 'Observable<ExampleDTO[]>': _isScalar, _trySubscribe, _subscribe
  // getAll(criterion: Partial<ExampleDTO>): Observable<ExampleDTO[]> {
  // return this._client
  // .collection<ExampleDTO>('example-list')
  // .valueChanges({ idField: 'id' })
  // .pipe(map((data: ExampleDTO[]) => filterByCriterion(data, criterion)));
  // }

  // This is the solution presented by Lowgular, error:
  // Type 'Observable<(ExampleDTO & { id: string; })[]>' is missing the
  // following properties from type 'Observable<ExampleDTO[]>': _isScalar, _trySubscribe, _subscribe
  // getAll(): Observable<ExampleDTO[]> {
  //   return this._client
  //     .collection<ExampleDTO>('example-list')
  //     .valueChanges({ idField: 'id' })
  // }
}
