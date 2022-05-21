import { ActivatedRoute } from '@angular/router';
import {
  GETS_ONE_TEAM_MEMBER_DTO,
  GetsOneTeamMemberDtoPort,
} from './../../../application/ports/secondary/dto/gets-one-team-member.dto-port';
import { TeamMemberDTO } from './../../../application/ports/secondary/dto/team-member.dto';
import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsComponent {
  employee$: Observable<TeamMemberDTO> = this._getsOneTeamMemberDto.getOne(
    this._route.snapshot.params.employeeId
  );
  routeParams$ = this._route.params;

  constructor(
    private _route: ActivatedRoute,
    @Inject(GETS_ONE_TEAM_MEMBER_DTO)
    private _getsOneTeamMemberDto: GetsOneTeamMemberDtoPort
  ) {}
}
