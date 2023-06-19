import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SHA512 } from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showSideMenu: boolean | undefined;
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http : HttpClient,
    private activatedRoute: ActivatedRoute,
    private route : Router) {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.showSideMenu = this.activatedRoute.snapshot.data['showSideMenu'] ?? true;
  }


  onSubmit(): void {

    if (this.registrationForm.valid) {

      if(this.registrationForm.value?.password){
        const password = this.registrationForm.value.password;
        const hashedPassword = SHA512(password).toString();
        this.registrationForm.value.password = hashedPassword

      }

      console.log(this.registrationForm.value);

      const email = this.registrationForm.value.email;
      const password = this.registrationForm.value.password

      console.log("email : ",email);
      console.log("password : ",password);

      // Send the email and hashed password to your server-side API
      // const url = `/auth?email=${email}&password=${password}`;
      // this.http.get(url)
      //   .subscribe(
      //     (response) => {
      //       // Handle the response from the server
      //       console.log('Server response:', response);
      
      //       if (Array.isArray(response) && response.length > 0) {
      //         const user = response.find((user) => user.email === email && user.password === password);
      //         if (user) {
      //           console.log('User Info:', user);
      //         } else {
      //           console.log('User not found');
      //         }
      //       } else {
      //         console.log('User not found');
      //       }
      //     },
      //     (error) => {
      //       // Handle the error from the server
      //       console.error('Error:', error);
      //     }
      //   );
      
      
      
      
      //implementing logic for mapping email first, then if user exists, check password !

      //if email matches from "authDB", match password else throw alert that username does not exists !


      //if password matches, return {user} object !

      // else throw error, alert that password is wrong !

      const url = `/auth?email=${email}&password=${password}`;
      this.http.get(url).subscribe(
        (response: any) => {
          console.log('Server response:', response);
      
          if (response && response.user) {
            console.log('User Info:', response.user);

      // Store user information in localStorage
      localStorage.setItem('user', JSON.stringify(response.user));
      if(response.user.role == "admin"){
        this.route.navigate(["admin-dashboard"])
      }else if(response.user.role == "student"){
        this.route.navigate(["all-available-exams"])
      }else if(response.user.role == "approver"){
        this.route.navigate(["approver-dashboard"])
      }

      // You can access the stored user information anywhere in your application
      const storedUserString = localStorage.getItem('user');
      if (storedUserString) {
        const storedUser = JSON.parse(storedUserString);
        console.log('Stored User Info:', storedUser);
      } else {
        console.log('User information not found in localStorage');
      }
      

          } else {
            if (response && response.message === 'Incorrect email') {
              console.log('Incorrect email');
              alert('Incorrect email');
            } else if (response && response.message === 'Incorrect password') {
              console.log('Incorrect password');
              alert('Incorrect password');
            } else {
              console.log('User not found or error occurred');
              alert('User not found or an error occurred');
            }
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
      



      
    }
  }

  routeToAuth(){
    this.route.navigate(["auth"])
  }


}