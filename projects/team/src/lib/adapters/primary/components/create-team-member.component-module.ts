import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTeamMemberComponent } from './create-team-member.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreateTeamMemberComponent],
  providers: [],
  exports: [CreateTeamMemberComponent],
})
export class CreateTeamMemberComponentModule {}
