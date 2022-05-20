import { FirebaseExamplesService } from './../../../projects/example/src/lib/adapters/secondary/services/firebase-examples.service';
import { ExampleListComponentModule } from './../../../projects/example/src/lib/adapters/primary/components/example-list.component-module';
import { NgModule } from '@angular/core';
import { AboutUsPage } from './about-us.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GETS_ALL_EXAMPLE_DTO } from 'projects/example/src/lib/application/ports/secondary/dto/gets-all-example.dto-port';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsPage,
      },
    ]),
    // Added manually
    ExampleListComponentModule,
  ],
  declarations: [AboutUsPage],
  providers: [
    // This had to be added manually,
    // Lowgular did propose to add the correct smart component from
    // but then did not import either of the two here
    // (in the instruction videos it was imported everything on its own)
    // Wrong version of Lowgular? The Firebase Service was also an issue
    FirebaseExamplesService,
    { provide: GETS_ALL_EXAMPLE_DTO, useExisting: FirebaseExamplesService },
  ],
  exports: [],
})
export class AboutUsPageModule {}
