import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsMessageDtoPort } from '../../../application/ports/secondary/dto/adds-message.dto-port';
import { MessageDTO } from '../../../application/ports/secondary/dto/message.dto';

@Injectable()
export class FirebaseMessagesService implements AddsMessageDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(message: Partial<MessageDTO>): Observable<void> {
    return from(this._client.collection('messages').add(message)).pipe(
      map(() => void 0)
    );
  }
}
