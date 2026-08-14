import { RegisterProductService } from './../register-product/register-product.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-product',
  standalone: false,
  templateUrl: './read-product.component.html',
  styleUrl: './read-product.component.css'
})
export class ReadProductComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private RegisterProductService: RegisterProductService) {

  }

  ngOnInit(): void {
    this.RegisterProductService.read().subscribe(product =>{
      this.products = product
    })
  }

}
