import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataStoreService } from '../../../Services/data-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  private data : any

  constructor(private fb: FormBuilder, private dataStore:DataStoreService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      const formData = this.loginForm.value; // Extract the plain object containing form data
      try {
        this.dataStore.login(formData).subscribe((res: any) => {
          this.data = res.data;
          localStorage.setItem('accessToken', res.data.access_token);
          console.log(res.data.access_token);
        });
      } catch (error) {
        console.error('Error occurred during login:', error);
        alert("Something is Wrong");
      }
    } else {
      console.warn('Login form is invalid');
    }
  }
  clickRegister(){
    
  }
}
