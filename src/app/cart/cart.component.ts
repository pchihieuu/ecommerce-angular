import { Component } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../api/cart.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  faTimesCircle = faTimesCircle
  public products!:any[];
 public grandtotal:number = 0;
  constructor(private cart:CartService,private toast :NgToastService) { }
  ngOnInit(): void {
    this.cart.getprouduct().subscribe(res=>{
      this.products = res;
      this.grandtotal = this.cart.gettotalprice();
      })
    
  }
  emptycart(){
    this.toast.warning({detail:'deleted all from cart',summary:'all item have been deleted',duration:3000})
    this.cart.removeallcart();
  }

  delete(item:any){
    this.toast.warning({detail:'deleted from cart',summary:'item has been deleted',duration:1000})
    this.cart.removecartitem(item)
  }

}
