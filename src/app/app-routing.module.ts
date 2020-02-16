import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormComponent} from './containers/reactive-form/reactive-form.component';
import {TemplateDrivenFormComponent} from './containers/template-driven-form/template-driven-form.component';


const routes: Routes = [
  {path: '', component: TemplateDrivenFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
