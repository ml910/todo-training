import { Injectable } from '@angular/core';
// Same thing an in the last commit - this import had to be corrected to not include 'compat'
// ^ This comment had to be added twice - Lowgular replaces imports by force, removing the previous ones?
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GetsAllTeamMemberDtoPort } from '../../../application/ports/secondary/dto/gets-all-team-member.dto-port';
import { TeamMemberDTO } from '../../../application/ports/secondary/dto/team-member.dto';

@Injectable()
export class FirebaseEmployeesService implements GetsAllTeamMemberDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<TeamMemberDTO[]> {
    return this._client
      .collection<TeamMemberDTO>('team-members')
      .valueChanges({ idField: 'id' });
  }
}
