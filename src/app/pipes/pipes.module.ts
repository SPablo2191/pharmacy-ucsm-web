import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnPipePipe } from './column-pipe.pipe';
import { ErrorMessagePipe } from './error-message.pipe';

@NgModule({
  declarations: [ColumnPipePipe, ErrorMessagePipe],
  imports: [CommonModule],
  exports: [ColumnPipePipe,ErrorMessagePipe],
})
export class PipesModule {}
