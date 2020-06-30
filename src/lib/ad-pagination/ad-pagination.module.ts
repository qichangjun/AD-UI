import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdPaginationComponent } from './ad-pagination.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdPaginationComponent],
  exports:[AdPaginationComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,        
    ReactiveFormsModule,
  ]
})
export class AdPaginationModule { }
