import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar,private authService: AuthService,private router:Router) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit(): void {
    
  }
  login(): void {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;
    const isAuthenticated = this.authService.authenticate(userName, password);

    if (isAuthenticated) {
          this.router.navigate(['/home']);
    } else {
      this._snackBar.open('Login failed', 'Close', {
        duration: 2000,
        panelClass: 'error-snackbar'
      });
    }
  }
  onFormSubmit() {
  }

}
