import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from '../../services/cadastro.service';
import { InputPasswordComponent } from '../../components/input-password/input-password.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ CardComponent, InputComponent, ButtonComponent, InputPasswordComponent, ReactiveFormsModule ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private router: Router, private cadastroService: CadastroService) {
    this.cadastroForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onCadastro(): void {
    console.log(this.cadastroForm.value);
    this.cadastroService.createUser(
      this.cadastroForm.value.name,
      this.cadastroForm.value.username,
      this.cadastroForm.value.password
    ).subscribe((res) => {
      console.log('Res ', res);
      this.router.navigate(['login']);
    });
  }
}
