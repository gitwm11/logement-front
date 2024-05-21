import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider,
    MatFormField,
    MatInput,
    MatLabel,
    MatCardActions,
    MatButton,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public loginForm! : FormGroup;
  constructor(private fb: FormBuilder,
              private authSerice : AuthService,
              private router : Router
              ) {
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control('')
    })
  }

  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let auth:boolean = this.authSerice.login(username,password);
    if(auth==true){
      this.router.navigateByUrl("/admin")

    }
  }
}
