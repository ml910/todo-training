import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsFormComponent } from './contact-us-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ContactUsFormComponent],
  providers: [],
  exports: [ContactUsFormComponent],
})
export class ContactUsFormComponentModule {}
