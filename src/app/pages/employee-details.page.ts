import { ActivatedRoute } from '@angular/router';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

// TODO: This should become a part of a separate lib at some point, but then we already have our-team
@Component({
  selector: 'app-employee-details-page',
  templateUrl: './employee-details.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsPage {
  // TODO: It does not seem that Lowgular interacts with ActivatedRoute in any way
  // there are no actions for it, would be really good to add them
  constructor(private _route: ActivatedRoute) {}

  routeParams$ = this._route.params;
}
