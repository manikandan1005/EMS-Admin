import { Component } from '@angular/core';
interface data{userName:string,pass1:number|null,pass2:number|null}
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login:data={userName:'',pass1:null,pass2:null};
  Login=()=>{
    if(this.login.pass1===this.login.pass2 && this.login.pass1 !=null){
      console.log("pass word match");
    }
    else alert("Passwords do not match");

  }
}
