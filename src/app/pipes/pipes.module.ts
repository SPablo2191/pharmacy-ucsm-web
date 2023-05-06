import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnPipePipe } from './column-pipe.pipe';

@NgModule({
  declarations: [ColumnPipePipe],
  imports: [CommonModule],
  exports: [ColumnPipePipe],
})
export class PipesModule {}
