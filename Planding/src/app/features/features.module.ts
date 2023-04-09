import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AboutComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports: [
    AboutComponent
  ]
})

export class FeaturesModule {}