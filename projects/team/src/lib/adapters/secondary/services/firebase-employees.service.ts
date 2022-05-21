import { Injectable } from '@angular/core';
// Corrected manually the one below, again (3rd time)
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTeamMemberDtoPort } from '../../../application/ports/secondary/dto/gets-all-team-member.dto-port';
import { AddsTeamMemberDtoPort } from '../../../application/ports/secondary/dto/adds-team-member.dto-port';
import { TeamMemberDTO } from '../../../application/ports/secondary/dto/team-member.dto';

// Same thing an in the last commit - this import had to be corrected to not include 'compat'
// ^ This comment had to be added twice - Lowgular replaces imports by force, removing the previous ones?

// Again, the imports get replaced and not added to the bottom

@Injectable()
export class FirebaseEmployeesService
  implements GetsAllTeamMemberDtoPort, AddsTeamMemberDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<TeamMemberDTO[]> {
    return this._client
      .collection<TeamMemberDTO>('team-members')
      .valueChanges({ idField: 'id' });
  }

  add(teamMember: Partial<TeamMemberDTO>): Observable<void> {
    return from(this._client.collection('team-members').add(teamMember)).pipe(
      map(() => void 0)
    );
  }
}
