import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleListComponent } from './example-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExampleListComponent],
  providers: [],
  exports: [ExampleListComponent],
})
export class ExampleListComponentModule {}
