import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesListComponent } from './examples-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExamplesListComponent],
  providers: [],
  exports: [ExamplesListComponent],
})
export class ExamplesListComponentModule {}
