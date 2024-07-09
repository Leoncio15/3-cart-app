import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit{
  products!: Product[];

  constructor(private productService: ProductService, private sharingDataService: SharingDataService, private router: Router){
    if(this.router.getCurrentNavigation()?.extras.state){
      this.products = this.router.getCurrentNavigation()?.extras.state!['products'];

    }

  }
  ngOnInit(): void {
    if(!this.products){
      this.products = this.productService.findAll();
    }
  }

  // @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();

  onAddCart(product: Product) {
    this.sharingDataService.productEventEmitter.emit(product);
  }
}
