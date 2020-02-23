import {NgModule} from '@angular/core';
import {ReactiveFormComponent} from './reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormRoutingModule} from './reactive-form.routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ReactiveFormComponent
  ],
  exports: [ReactiveFormComponent, ReactiveFormRoutingModule],
  bootstrap: []
})
export class ReactiveFormModule {
}
