import { Component, inject } from '@angular/core';
import {  Router } from '@angular/router';
interface data{userName:string,pass1:number|null,pass2:number|null}
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login:data={userName:'',pass1:null,pass2:null};
  router=inject(Router);
  Login=()=>{
    if(this.login.pass1===this.login.pass2 && this.login.pass1 !=null){
      console.log("pass word match");
      this.router.navigateByUrl('dashboard');

    }
    else alert("Passwords do not match");

  }
}
