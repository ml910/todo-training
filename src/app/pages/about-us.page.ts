import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

// TODO: all had to be imported manually
@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPage {}
