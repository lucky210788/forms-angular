import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TemplateDrivenFormComponent} from './template-driven-form.component';
import {CommonModule} from '@angular/common';
import {TemplateDrivenFormRoutingModule} from './template-driven-form.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TemplateDrivenFormComponent
  ],
  exports: [TemplateDrivenFormComponent, TemplateDrivenFormRoutingModule],
  bootstrap: []
})
export class TemplateDrivenFormModule {
}

