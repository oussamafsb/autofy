import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MytasksComponent } from './mytasks/mytasks.component';
import { DoneComponent } from './done/done.component';


const routes: Routes = [
{path: 'home' , component:HomeComponent},
{path: 'mytasks', component:MytasksComponent},
{path: 'done', component:DoneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
