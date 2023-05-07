import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'ui-input-number',
  standalone: true,
  imports: [CommonModule, InputNumberModule, ReactiveFormsModule],
  template: `
    <div class="field" [formGroup]="group">
      <label for="input" class="text-gray-700">{{ label }}</label>
      <div class="p-inputgroup">
        <p-inputNumber
          id="input"
          inputId="{{ type }}"
          [prefix]="prefix"
          [suffix]="suffix"
          [formControlName]="name"
          [placeholder]="placeholder"
          (onInput)="onInput()"
          [ngClass]="
            this.group.get(this.name)?.invalid &&
            this.group.get(this.name)?.touched
              ? 'ng-invalid ng-dirty'
              : ''
          "
        >
        </p-inputNumber>
      </div>
    </div>
    <small
      class="text-red-500"
      *ngIf="
        this.group.get(this.name)?.invalid && this.group.get(this.name)?.touched
      "
    >
      campo requerido.
    </small>
  `,
  styles: [],
})
export class UiInputNumberComponent {
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() prefix: string = '';
  @Input() suffix: string = '';
  @Input() group!: FormGroup;
  @Input() errorMessage!: string;
  @Input() name!: string;
  @Input() type!: string;
  valid: boolean = false;
  @Output() value = new EventEmitter<string>();
  change: Subject<string> = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.name);
  }
  onInput() {
    this.change.next(this.group.controls[this.name].value);
    this.value.emit(this.group.controls[this.name].value);
  }
}
