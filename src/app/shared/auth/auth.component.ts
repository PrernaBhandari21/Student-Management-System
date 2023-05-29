import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showSideMenu: boolean | undefined;
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route : Router) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['student'],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.showSideMenu = this.activatedRoute.snapshot.data['showSideMenu'] ?? true;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const { name, email, role } = this.registrationForm.value;
      const password = this.hashPassword(this.registrationForm.value.password);
      const postData = { name, email, password, role };
      console.log(postData);

      fetch('/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(response => {
          console.log('Response from server:', response);
          if (response.ok) {
            // Successful operation
            alert('Student Created Successfully !!');
          } else {
            // Handle error case
            console.error('Error in creation of student. Status:', response.status);
            alert('Error in creating student. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error in creation of student. Error : ', error);
          alert('Error in creating student. Please try again.');
        });
    }
  }

  hashPassword(password: string): string {
    const hashedPassword = CryptoJS.SHA512(password).toString();
    return hashedPassword;
  }

  routeToLogin(){
    this.route.navigate(["login"])
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }
}
