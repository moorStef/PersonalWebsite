import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { Ngmaterial } from './ngmaterial.module/ngmaterial.module.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    EducationComponent,
    ProjectsComponent,
    ExperienceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    Ngmaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
