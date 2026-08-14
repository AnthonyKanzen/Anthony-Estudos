import { ActivatedRoute, Router } from '@angular/router';
import { RegisterProductService } from './../register-product/register-product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-delete-product',
  standalone: false,
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit {

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

  deleteProduct(): void {

    if (this.product.id) {
      this.registerProductService.delete(this.product.id).subscribe(() => {
        this.registerProductService.showOnMenssage('Produto excluído!');
        this.router.navigate(['/product']);
      });
    }

  }

  cancel(): void {
    this.router.navigate(['/product']);
  }
}