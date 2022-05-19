import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// TODO: Not a lib, it's a component inside a lib
@Component({
  selector: 'lib-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsFormComponent {
  readonly messageForm: FormGroup = new FormGroup({
    email: new FormControl(),
    text: new FormControl(),
  });

  onSubmitClicked(): void {
    console.log(this.messageForm.getRawValue());
  }
}
