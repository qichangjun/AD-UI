import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyCodeComponent } from './verify-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerifyCodeComponent],
  imports: [
    CommonModule,
    FormsModule,        
    ReactiveFormsModule,
  ],
  exports:[VerifyCodeComponent]
})
export class VerifyCodeModule { }
