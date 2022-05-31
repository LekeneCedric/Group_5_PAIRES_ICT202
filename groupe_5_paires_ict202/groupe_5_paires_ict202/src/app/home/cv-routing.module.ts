import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetencesComponent } from './content/competences/competences.component';
import { ExperiencesComponent } from './content/experiences/experiences.component';
import { FormationsComponent } from './content/formations/formations.component';
import { LanguagesComponent } from './content/languages/languages.component';
import { ProjetsPersonnelComponent } from './content/projets-personnel/projets-personnel.component';
import { InformationsComponent } from './informations/informations.component';

const routes: Routes = [
  { path: 'home/informations', component: InformationsComponent },
  { path: 'home/experiences', component: ExperiencesComponent },
  { path: 'home/competences', component: CompetencesComponent },
  { path: 'home/formations', component: FormationsComponent },
  { path: 'home/languages', component: LanguagesComponent },
  { path: 'home/projects', component: ProjetsPersonnelComponent }
]; 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class CvRoutingModule { }