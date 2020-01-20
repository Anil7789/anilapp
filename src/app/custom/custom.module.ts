import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [ChildComponent, FormComponent],
  imports: [
    CommonModule
  ]
})
export class CustomModule { }
