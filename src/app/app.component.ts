import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { KeyValuePipe, NgTemplateOutlet } from '@angular/common';
import { MatChip } from '@angular/material/chips';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { ValueOf } from 'type-fest';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatInput,
    MatButton,
    NavigationComponent,
    MatChip,
    MatMenu,
    MatCheckbox,
    MatMenuItem,
    MatMenuTrigger,
    ReactiveFormsModule,
    KeyValuePipe,
    NgTemplateOutlet,
    MatIcon,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private formBuilder = inject(FormBuilder);

  formGroup = this.formBuilder.nonNullable.group({
    element1: false,
    element2: false,
    element3: false,
    element4: this.formBuilder.group({
      subElement1: false,
      subElement2: false,
    }),
  });

  amountSelected = toSignal(
    this.formGroup.valueChanges.pipe(map(() => this.getSelectedAmount())),
    { initialValue: this.getSelectedAmount() },
  );

  getSelectedAmount(
    parent:
      | typeof this.formGroup.value
      | ValueOf<typeof this.formGroup.value> = this.formGroup.value,
  ): number {
    return Object.values(parent)
      .map((value) =>
        typeof value === 'object' ? this.getSelectedAmount(value) : value,
      )
      .filter(Boolean).length;
  }
}
