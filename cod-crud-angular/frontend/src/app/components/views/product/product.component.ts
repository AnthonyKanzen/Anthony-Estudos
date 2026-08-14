import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
     headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    };
   }

  ngOnInit() {
  }

  navigateToRegisterProduct(): void{
    this.router.navigate(['/register'])
  }
}
