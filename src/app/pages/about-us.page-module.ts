import { NgModule } from '@angular/core';
import { AboutUsPage } from './about-us.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({ imports: [CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
        }
      ])],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
