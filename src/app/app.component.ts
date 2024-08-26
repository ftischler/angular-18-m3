import { Component } from '@angular/core';
import {
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix,
} from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatLabel,
    MatSelect,
    MatOption,
    MatFormField,
    ReactiveFormsModule,
    MatIcon,
    MatPrefix,
    MatSuffix,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  control = new FormControl('element1');
}
