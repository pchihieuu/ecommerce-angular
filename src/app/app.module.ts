import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { HotproductsComponent } from './hotproducts/hotproducts.component';
import { HomeComponent } from './home/home.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { CategoryComponent } from './category/category.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RecommendProductComponent } from './recommend-product/recommend-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { register } from 'swiper/element/bundle';
import { HighlightDirective } from './highlight.directive';
import { HighlightsComponent } from './highlights/highlights.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DirectiveFormComponent } from './directive-form/directive-form.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { MainFormComponent } from './main-form/main-form.component';
import { CartComponent } from './cart/cart.component';
import { NgToastModule } from 'ng-angular-popup';

// register Swiper custom elements
register();
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HotproductsComponent,
    HomeComponent,
    NewProductsComponent,
    CategoryComponent,
    CategoryProductsComponent,
    ProductDetailComponent,
    RecommendProductComponent,
    ListProductsComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    BannerComponent,
    
    HighlightDirective,
    HighlightsComponent,
    DirectiveFormComponent,
    ProfileEditorComponent,
    MainFormComponent,
    CartComponent
    
   
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
