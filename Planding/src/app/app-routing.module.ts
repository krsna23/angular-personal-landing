import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';

import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { ContentComponent } from './Home/content/content.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ContentComponent },
  { path: 'about', component: AboutComponent },
  {path: 'projects', component: ProjectsComponent},
  {path: 'contacts', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}