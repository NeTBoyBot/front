import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  implements OnInit {


  readonly form = this.fb.group({
    
    Name: ['', [Validators.required]],
    Password: ['', [Validators.required , Validators.minLength(6) ]],
    Email: ['', [Validators.required ,Validators.email]],
    Region: ['', [Validators.required]],
  })
  
    constructor(
       private fb : FormBuilder, 
       private nzMessageService : NzMessageService, 
       private nzNotificationService : NzNotificationService, 
       private _auth: UserService,
       private router: Router ) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(){
      if(this.form.invalid){
        this.nzNotificationService.error('Ошибка' , 'Форма заполнена не верно');
        Object.values(this.form.controls).forEach(control =>{
          if(control.invalid){
            control.markAsDirty();
            control.updateValueAndValidity({onlySelf: true})
          }
        });
        return;
      }
  
      this._auth.registration(this.form.getRawValue()).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl('/login');
  
      })
    }
  }
  
