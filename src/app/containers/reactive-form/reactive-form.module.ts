import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormComponent} from './reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [ReactiveFormComponent],
  bootstrap: []
})
export class ReactiveFormModule {
}
