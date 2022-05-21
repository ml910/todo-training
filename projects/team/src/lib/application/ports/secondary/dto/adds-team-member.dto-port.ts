import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamMemberDTO } from './team-member.dto';

export const ADDS_TEAM_MEMBER_DTO = new InjectionToken<AddsTeamMemberDtoPort>(
  'ADDS_TEAM_MEMBER_DTO'
);

export interface AddsTeamMemberDtoPort {
  add(teamMember: Partial<TeamMemberDTO>): Observable<void>;
}
