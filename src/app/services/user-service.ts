import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http : HttpClient, private router : Router) { 
}

get token():string | null{
  return localStorage.getItem('token');
}

set token(value : string| null){
  if(!value){
    return;
  }
  localStorage.setItem('token', value);

}

registration(userRegister : any) : Observable<any>{
  return this._http.post(`https://localhost:7269/Register`, userRegister);
}

getCurrentUser() : Observable<any>{
  let url = `https://localhost:7269/СurrentUser`;
  return this._http.get<any>(url);
}



login(user: any): Observable<any>{
  return this._http.post(`https://localhost:7269/Login`, user)
  .pipe(tap((res : any)=>{
  this.token = res.token;
  this.router.navigateByUrl('/');
  }));
 }
}