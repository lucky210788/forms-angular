import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TemplateDrivenFormComponent} from './template-driven-form.component';


@NgModule({
  declarations: [
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [ TemplateDrivenFormComponent ],
  bootstrap: []
})
export class TemplateDrivenFormModule { }
