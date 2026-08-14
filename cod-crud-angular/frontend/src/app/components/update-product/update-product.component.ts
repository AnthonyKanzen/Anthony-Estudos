import { ActivatedRoute, Router } from '@angular/router';
import { RegisterProductService } from './../register-product/register-product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-update-product',
  standalone: false,
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  };

  constructor(
    private registerProductService: RegisterProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.registerProductService.readById(id).subscribe(product => {
        this.product = product;
      });
    }
  }

  updateProduct(): void {

    this.registerProductService.update(this.product).subscribe(() => {
      this.registerProductService.showOnMenssage('Produto atualizado!');
      this.router.navigate(['/product']);
    });

  }

  cancel(): void {
    this.router.navigate(['/product']);
  }
}