import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-my-shopping-cart',
  templateUrl: './my-shopping-cart.component.html',
  styleUrls: ['./my-shopping-cart.component.scss']
})
export class MyShoppingCartComponent implements OnInit {

  itemCart : any;
  constructor(
    private _cartService : ShoppingCartService,
    private router : Router){}

  ngOnInit(): void {
    this.onSubmit();
  }
  
  onSubmit(){
    this.itemCart = this._cartService.GetSelectedCurrentUser(100);
  }

  deleteFromCart(itemId: string){
    this._cartService.deleteProduct(itemId);
    window.location.reload();
  }

}
