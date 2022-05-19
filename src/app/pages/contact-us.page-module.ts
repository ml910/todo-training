import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsPage } from './contact-us.page';
import { ContactUsFormComponentModule } from '@messages';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactUsPage,
      },
    ]),
    ContactUsFormComponentModule,
  ],
  declarations: [ContactUsPage],
  providers: [],
  exports: [],
})
export class ContactUsPageModule {}
