import { ContextDtoStoragePort } from './../../../application/ports/secondary/dto/context-dto.storage-port';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetsAllTeamMemberDtoPort } from '../../../application/ports/secondary/dto/gets-all-team-member.dto-port';
import { AddsTeamMemberDtoPort } from '../../../application/ports/secondary/dto/adds-team-member.dto-port';
import { GetsOneTeamMemberDtoPort } from '../../../application/ports/secondary/dto/gets-one-team-member.dto-port';
import { TeamMemberDTO } from '../../../application/ports/secondary/dto/team-member.dto';

// Corrected manually the one below, again (3rd time)
// Same thing an in the last commit - this import had to be corrected to not include 'compat'
// ^ This comment had to be added twice - Lowgular replaces imports by force, removing the previous ones?

// Again, the imports get replaced and not added to the bottom

@Injectable()
export class FirebaseEmployeesService
  implements
    GetsAllTeamMemberDtoPort,
    AddsTeamMemberDtoPort,
    GetsOneTeamMemberDtoPort,
    // This one had to be added manually -
    // Lowgular does not (anymore?) have the Implement Storage Port option in the dropdown
    // TODO: At this point too many things are out sync to continue using Lowgular while following the course task list and videos
    ContextDtoStoragePort
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

  getOne(id: string): Observable<TeamMemberDTO> {
    return this._client
      .doc<TeamMemberDTO>('team-members/' + id)
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }


}
