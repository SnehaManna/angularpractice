import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthServiceService } from '@project/services/auth-service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup ;

  constructor(private loginapi:AuthServiceService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(5)]),
    })
  
    
  }
   
  submit(){
    console.log(this.loginForm.value);
    this.loginapi.getLogin('https://reqres.in/api/login',this.loginForm.value).subscribe((res:any)=>{
      console.log(res)
    })

  }
  get emailError(){
    return this.loginForm.get('email');
  }
  get passwordError(){
    return this.loginForm.get('password');
  }
}
