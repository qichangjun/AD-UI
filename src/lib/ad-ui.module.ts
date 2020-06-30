import { NgModule } from '@angular/core';
import { AdUiComponent } from './ad-ui.component';
import { AdTreeModule } from './ad-tree/ad-tree.module';
import { AdPaginationModule } from './ad-pagination/ad-pagination.module';

@NgModule({
  declarations: [AdUiComponent],
  imports: [
    AdTreeModule,
    AdPaginationModule
  ],
  exports: [AdUiComponent,AdTreeModule,AdPaginationModule]
})
export class AdUiModule { }
