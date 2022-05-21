import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from './../../../application/ports/secondary/dto/context-dto.storage-port';
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
  constructor(
    private _route: ActivatedRoute,
    @Inject(GETS_ONE_TEAM_MEMBER_DTO)
    private _getsOneTeamMemberDto: GetsOneTeamMemberDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}

  employee$: Observable<TeamMemberDTO> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) => this._getsOneTeamMemberDto.getOne(data.employeeId))
    );
}
