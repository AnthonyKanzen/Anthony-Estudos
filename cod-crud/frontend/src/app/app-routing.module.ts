import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ProductComponent } from './components/views/product/product.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
   path:"product", 
    component: ProductComponent
  },
  {
   path:"register", 
    component: RegisterProductComponent
  },
    {
   path:"update/:id", 
    component: UpdateProductComponent
  },
    {
   path:"delete/:id", 
    component: DeleteProductComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
