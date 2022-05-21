import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ADDS_TEAM_MEMBER_DTO,
  AddsTeamMemberDtoPort,
} from '../../../application/ports/secondary/dto/adds-team-member.dto-port';

@Component({
  selector: 'lib-create-team-member',
  templateUrl: './create-team-member.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTeamMemberComponent {
  // Lowgular added this one without problems, EPIC
  readonly addEmployee: FormGroup = new FormGroup({
    // TODO: Will Lowgular add validators on it's own? I did not see that functionality
    // It's not necesssary, just an idea to at least handle the default Angular Validators[]
    id: new FormControl(),
    name: new FormControl(),
    bio: new FormControl(),
    imageUrl: new FormControl(),
  });

  constructor(
    @Inject(ADDS_TEAM_MEMBER_DTO)
    private _addsTeamMemberDto: AddsTeamMemberDtoPort
  ) {}

  // TODO: Typo - 'Submited' should be 'Submitted'
  onAddEmployeeSubmited(formValue: FormGroup): void {
    if (this.addEmployee.invalid) {
      return;
    }

    this._addsTeamMemberDto
      .add({
        id: this.addEmployee.controls.id.value,
        name: this.addEmployee.controls.name.value,
        bio: this.addEmployee.controls.bio.value,
        imageUrl: this.addEmployee.controls.imageUrl.value,
      })
      .subscribe();
  }
}
