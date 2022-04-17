import { NgModule, Pipe } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjSptsComponent } from './proj-spts/proj-spts.component';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ProjAccComponent } from './proj-acc/proj-acc.component';
import { ProjPbComponent } from './proj-pb/proj-pb.component';
import { ProjCinComponent } from './proj-cin/proj-cin.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'contact', component:ContactComponent},
  {path:'team', component:TeamComponent},
  {path:'project', component:ProjectComponent},
  {path:'spts', component:ProjSptsComponent},
  {path:'acc', component:ProjAccComponent},
  {path:'pb', component:ProjPbComponent},
  {path:'cin', component:ProjCinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
