import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamMemberDTO } from './team-member.dto';

export const GETS_ONE_TEAM_MEMBER_DTO =
  new InjectionToken<GetsOneTeamMemberDtoPort>('GETS_ONE_TEAM_MEMBER_DTO');

export interface GetsOneTeamMemberDtoPort {
  getOne(id: string): Observable<TeamMemberDTO>;
}
