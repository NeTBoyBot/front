import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user-service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private _http: HttpClient,
    private _userService:UserService) { }

  public addProductToCart(AdId : string) : Observable<any>{
    return this._http.post(`https://localhost:7269/createOrder?&ProductId=${AdId}`, null );
  }

  public deleteProduct(id: string): void{
    this._http.delete<string>(`https://localhost:7269/deleteOrder?Id=${id}`).subscribe();
}

public GetSelectedCurrentUser(take : number) : Observable<any>{
  let url = `https://localhost:7269/allUserOrders`;
    return this._http.get<any>(url);
}



}
