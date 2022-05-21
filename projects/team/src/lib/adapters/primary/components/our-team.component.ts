import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamMemberDTO } from '../../../application/ports/secondary/dto/team-member.dto';
import {
  GETS_ALL_TEAM_MEMBER_DTO,
  GetsAllTeamMemberDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-team-member.dto-port';

// Here
// TODO: This is not a lib, it's a component inside a lib
@Component({
  selector: 'lib-our-team',
  templateUrl: './our-team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent {
  teamMembers$: Observable<TeamMemberDTO[]> =
    this._getsAllTeamMemberDto.getAll();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    @Inject(GETS_ALL_TEAM_MEMBER_DTO)
    private _getsAllTeamMemberDto: GetsAllTeamMemberDtoPort
  ) {}

  // TODO: It would be really cool if Lowgular gave options for ActivatedRoute handling,
  // this had to be done manually
  redirectToSpecificMember(memberName: string): void {
    this._router.navigate([memberName], { relativeTo: this._route });
  }
}
