import { Component } from '@angular/core';
import {
  openClose,
  darkLight,
  fadeTop,
  fadeBottom,
  fadeLeft,
  fadeRight,
  rotate,
} from './animations';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    openClose,
    darkLight,
    fadeTop,
    fadeBottom,
    fadeLeft,
    fadeRight,
    rotate,
  ],
})
export class AppComponent {
  title = '';
  items: string[] = [];
  products: Product[] = [];
  dbProducts: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ];
  idxProd = 0;
  state = 'default';

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    const prodInterval = setInterval(() => {
      if (this.idxProd < this.dbProducts.length) {
        this.showProduct(this.dbProducts[this.idxProd]);
        this.idxProd++;
      } else {
        clearInterval(prodInterval);
        this.setHoverEffect();
      }
    }, 500);
  }

  setHoverEffect() {
    const prod = document.getElementsByClassName('product');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < prod.length; i++) {
      prod[i].addEventListener('mouseover', (e) => {
        prod[i].classList.add('product-dark');
      });
      prod[i].addEventListener('mouseout', (e) => {
        prod[i].classList.remove('product-dark');
      });
    }
  }

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  showProduct(product: Product) {
    this.products.push(product);
  }

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  deleteLastItem() {
    this.items.splice(this.items.length - 1, 1);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
