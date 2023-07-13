import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router, private _snackBar: MatSnackBar) {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      interests: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  connect(){
    if (this.registrationForm.valid) {
      this._snackBar.open("Votre Compte a été créee avec succes ",
        "OK",
        {duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass:'snack'});
      this.router.navigate(['/login']);
    }
  }
  onFormSubmit() {
  }

  ngOnInit(): void {
  }

}
