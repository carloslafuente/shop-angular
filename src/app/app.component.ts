import { Component } from '@angular/core';
import { openClose, darkLight, fadeTop, fadeLeft } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [openClose, darkLight, fadeTop, fadeLeft],
})
export class AppComponent {
  title = 'shop-angular';

  items: string[] = [];

  addItem() {
    this.items.push(`item ${this.items.length + 1}`);
  }

  deleteLastItem() {
    this.items.splice(this.items.length - 1, 1);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
