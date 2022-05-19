import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

// TODO: Not a lib, it's a component inside a lib
@Component({
  selector: 'lib-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsFormComponent {}
