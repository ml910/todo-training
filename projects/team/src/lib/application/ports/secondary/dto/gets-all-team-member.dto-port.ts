import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamMemberDTO } from './team-member.dto';

// TODO: Missing plural 's', not sure how it goes for irregular nouns
// Package that could help: https://www.npmjs.com/package/i
export const GETS_ALL_TEAM_MEMBER_DTO =
  new InjectionToken<GetsAllTeamMemberDtoPort>('GETS_ALL_TEAM_MEMBER_DTO');

export interface GetsAllTeamMemberDtoPort {
  getAll(): Observable<TeamMemberDTO[]>;
}
