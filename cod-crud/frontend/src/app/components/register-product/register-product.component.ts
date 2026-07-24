import { RegisterProductService } from './register-product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-product',
  standalone: false,
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.css'
})
export class RegisterProductComponent implements OnInit {

  constructor(private RegisterProductService: RegisterProductService,
    private router: Router){}

  ngOnInit(): void {
      
  }
  registerProduct(): void {
    this.RegisterProductService.showOnMenssage('Produto Registrado!')
  }
   cancel(): void {
    this.router.navigate(['/product'])
  }
  
}
