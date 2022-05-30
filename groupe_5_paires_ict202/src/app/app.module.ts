import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './home/content/content.component';
import { InformationsComponent } from './home/informations/informations.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CompetencesComponent } from './home/content/competences/competences.component';
import { ExperiencesComponent } from './home/content/experiences/experiences.component';
import { FormationsComponent } from './home/content/formations/formations.component';
import { LanguagesComponent } from './home/content/languages/languages.component';
import { ProjetsPersonnelComponent } from './home/content/projets-personnel/projets-personnel.component';
import { RouterModule } from '@angular/router';
import { CvRoutingModule } from './home/cv-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    InformationsComponent,
    NavbarComponent,
    CompetencesComponent,
    ExperiencesComponent,
    FormationsComponent,
    LanguagesComponent,
    ProjetsPersonnelComponent
  ],
  imports: [
    BrowserModule,
    CvRoutingModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
