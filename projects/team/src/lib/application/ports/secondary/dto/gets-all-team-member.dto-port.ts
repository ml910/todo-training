import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamMemberDTO } from './team-member.dto';

export const GETS_ALL_TEAM_MEMBER_DTO =
  new InjectionToken<GetsAllTeamMemberDtoPort>('GETS_ALL_TEAM_MEMBER_DTO');

export interface GetsAllTeamMemberDtoPort {
  getAll(): Observable<TeamMemberDTO[]>;
}
