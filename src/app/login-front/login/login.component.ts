import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataStoreService } from '../../../Services/data-store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  private data : any
  showAlert: boolean = false;

  constructor(private fb: FormBuilder, private dataStore:DataStoreService, private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.dataStore.login(formData).subscribe(
        (res: any) => {
          if (res.status === 'success') {
            // alert("Login successful");
            localStorage.setItem('accessToken', res.data.access_token);
            console.log(res.data.access_token)
            const decodedToken: any = jwtDecode(res.data.access_token);
            
            // ALERT/////
            this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
           

            //Router ///
            console.log(decodedToken.role[0].role)

                if(decodedToken.role[0].role==='Admin')
                {
                    this.router.navigate(['/admin_module'])
                }
                if(decodedToken.role[0].role==='Manager')
                {
                    this.router.navigate(['/manager_module'])
                }
                if(decodedToken.role[0].role==='Developer')
                {
                    this.router.navigate(['/user'])
                }
              }, 2000);
            
          } else {
            alert("UserId or Password Mismatch");
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status === 422) {
            alert("Invalid data. Please check the form fields and try again.");
          } if(error.status === 404){
            alert("An unexpected error occurred. Please try again later.");
          }
          
        }
      );
    } else {
      alert("Please fill in all required fields correctly.");
    }
  }
  
  

}
