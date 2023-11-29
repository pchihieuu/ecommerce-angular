import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { HotproductsComponent } from './hotproducts/hotproducts.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RecommendProductComponent } from './recommend-product/recommend-product.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { DirectiveFormComponent } from './directive-form/directive-form.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { MainFormComponent } from './main-form/main-form.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'products', component: ProductsComponent},
  {path:'home', component: HomeComponent},
  {path:'hotdeals', component:HotproductsComponent},
  {path:'loai/:id', component: CategoryProductsComponent},
  {path:'product/:id', component: ProductDetailComponent},
  {path:'productlist', component: ListProductsComponent},
  {path:'blog', component: BlogComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path: 'recommend', component: RecommendProductComponent},
  {path: 'highlight', component: HighlightsComponent},
  {path:'directiveform', component: DirectiveFormComponent},
  {path:'profilename', component:ProfileEditorComponent},
  {path: 'mainform', component: MainFormComponent},
  {path:'cart', component:CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
