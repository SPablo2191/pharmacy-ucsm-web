import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'ui-input-text',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule],
  template: `
    <div class="field" [formGroup]="group">
      <label [for]="name" class="text-gray-700">{{
        label
      }}</label>
      <div class="p-inputgroup">
        <input
          type="text"
          [attr.readonly]="readonly ? '' : null"
          pInputText
          [id]="name"
          [formControlName]="name"
          autofocus
          autocomplete="off"
          [ngClass]="{
            'p-invalid': group.get(name)?.dirty && group.get(name)?.errors
          }"
          #crudInput
          [ngClass]="customClass"
        />
        <!-- {{group.get(name)?.errors | json}} -->
        <small
          class="p-invalid"
          *ngIf="group.get(name)?.dirty && group.get(name)?.errors"
        >
          {{ group.get(name)?.errors }}
        </small>
      </div>
    </div>
  `,
  styles: [],
})
export class UiInputTextComponent {
  @Input() group!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;
  @Input() submitted: boolean = false;
  @Input() customClass!: string;
  @Input() readonly: boolean = false;
}
