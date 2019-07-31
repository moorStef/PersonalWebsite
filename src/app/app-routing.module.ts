import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'experience', component: ExperienceComponent, data: {state: 'experience'} },
  { path: 'education', component: EducationComponent, data: {state: 'education'} },
  { path: 'projects', component: ProjectsComponent, data: {state: 'projects'} },
  { path: 'about', component: AboutComponent, data: {state: 'about'} },
  { path: 'home', component: HomeComponent, data: {state: 'home'} },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '*', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
