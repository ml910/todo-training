import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ADDS_MESSAGE_DTO,
  AddsMessageDtoPort,
} from '../../../application/ports/secondary/dto/adds-message.dto-port';

// TODO: Not a lib, it's a component inside a lib
@Component({
  selector: 'lib-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsFormComponent {
  readonly messageForm: FormGroup = new FormGroup({
    // TODO: Validation
    email: new FormControl(),
    message: new FormControl(),
  });

  constructor(
    @Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort
  ) {}

  // TODO: Same two t's for submitted
  onMessageFormSubmited(): void {
    this._addsMessageDto
      .add({
        email: this.messageForm.controls.email.value,
        message: this.messageForm.controls.message.value,
      })
      .subscribe();
  }
}
