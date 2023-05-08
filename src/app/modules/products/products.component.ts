import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { Product } from 'src/app/models/Product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit{
  addComponent! : any;

  cols: Column[] = [
    { header: 'ID', field: 'id', pipe: 'index' } as Column,
    { header: 'Nombre', field: 'name' } as Column,
    { header: 'Descripción', field: 'description' } as Column,
    { header: 'Precio', field: 'price', pipe: 'currency' } as Column,
  ];
  products$! : Observable<Product[]>;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.products$ = this.productService.get();
  }
}
