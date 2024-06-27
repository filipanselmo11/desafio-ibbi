import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from '../../components/input/input.component';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { InputPasswordComponent } from '../../components/input-password/input-password.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CardComponent, InputComponent, InputPasswordComponent, ButtonComponent, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin(): void {
    this.router.navigate(['home']);
  }

  // onLogin(): void {
  //   console.log(this.loginForm.value);
  //   this.loginService.loginUser(
  //     this.loginForm.value.username,
  //     this.loginForm.value.password
  //   ).subscribe((res) => {
  //     console.log('RES ', res);
  //     this.router.navigate(['dashboard']);
  //   }, error => {
  //     console.error('Error ', error)
  //   });
  // }

  onCadastro():void {
    this.router.navigate(['cadastro']);
  }

}
