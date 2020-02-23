import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './containers/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./containers/template-driven-form/template-driven-form.module').then(
        m => m.TemplateDrivenFormModule
      )
  },
  {
    path: 'reactive-form',
    loadChildren: () =>
      import('./containers/reactive-form/reactive-form.module').then(
        m => m.ReactiveFormModule
      )
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
