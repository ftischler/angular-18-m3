import { Component, computed, signal } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatFormField, MatInput, FormsModule, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  #defaultCount = 2000;
  #maxCount = 4000;
  count = signal(this.#defaultCount);
  loremIpsum = computed(() => {
    const count = this.count();
    return loremIpsum({
      count: count <= this.#maxCount ? count : this.#defaultCount,
    });
  });
}
