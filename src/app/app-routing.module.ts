import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiojosuicoComponent } from './miojosuico/miojosuico.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:"",
    component:HomeComponent

 }

 ,{path:"miojo",
    component:MiojosuicoComponent

 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
