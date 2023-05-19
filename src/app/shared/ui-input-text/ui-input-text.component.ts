import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
@Component({
  selector: 'ui-input-text',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, PipesModule],
  template: `
    <div class="field" [formGroup]="group">
      <label [for]="name" class="text-gray-700">{{ label }}</label>
      <div class="p-inputgroup ">
        <input
          type="text"
          [attr.readonly]="readonly ? '' : null"
          pInputText
          [id]="name"
          [formControlName]="name"
          autofocus
          autocomplete="off"
          [ngClass]="
            this.group.get(this.name)?.invalid &&
            this.group.get(this.name)?.touched
              ? 'ng-invalid ng-dirty'
              : ''
          "
          #crudInput
          [ngClass]="customClass"
        />
      </div>
      <small
        class="text-red-500"
        *ngIf="
          this.group.get(this.name)?.invalid &&
          this.group.get(this.name)?.touched
        "
      >
        {{ this.group.get(this.name)?.errors | errorMessage }}
      </small>
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
