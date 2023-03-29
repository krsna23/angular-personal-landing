import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentComponent
  ],
  exports: [ContentComponent]
})
export class HomeModule { }