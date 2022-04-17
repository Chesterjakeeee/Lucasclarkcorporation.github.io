import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './project/project.component';
import { ProjSptsComponent } from './proj-spts/proj-spts.component';
import { ProjAccComponent } from './proj-acc/proj-acc.component';
import { ProjPbComponent } from './proj-pb/proj-pb.component';
import { ProjCinComponent } from './proj-cin/proj-cin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    TeamComponent,
    ProjectComponent,
    ProjSptsComponent,
    ProjAccComponent,
    ProjPbComponent,
    ProjCinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
