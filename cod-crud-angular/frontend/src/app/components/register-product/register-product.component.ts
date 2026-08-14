import { RegisterProductService } from './register-product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-register-product',
  standalone: false,
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.css'
})
export class RegisterProductComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private RegisterProductService: RegisterProductService,
    private router: Router){}

  ngOnInit(): void {
      
  }
  registerProduct(): void {
    this.RegisterProductService.register(this.product).subscribe(() =>{
      this.RegisterProductService.showOnMenssage('Produto Registrado!')
      this.router.navigate(['/product'])
    }) 
  }
   cancel(): void {
    this.router.navigate(['/product'])
  }
}
