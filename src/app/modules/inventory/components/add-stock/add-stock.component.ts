import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-stock',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
    <p>
      add-stock works!
    </p>
  `,
  styles: [
  ]
})
export class AddStockComponent {

}
