import { FirebaseExamplesServiceModule } from './../../../projects/example/src/lib/adapters/secondary/services/firebase-examples.service-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { ExamplesListComponentModule } from 'projects/example/src';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsPage,
      },
    ]),
    ExamplesListComponentModule,

    // TODO: This one had to be added manually,
    //Lowgular did not notice the service module is necessary for ExamplesListComponent
    FirebaseExamplesServiceModule,
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
