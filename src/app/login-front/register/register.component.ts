import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DataStoreService } from '../../../Services/data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerationForm: FormGroup ;

  constructor(private fb:FormBuilder, private dataStore: DataStoreService, private router: Router){

    this.registerationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator() } );

  }

   passwordsMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('password_confirmation')?.value;
  
      if (password && confirmPassword && password !== confirmPassword) {
        return { passwordsMismatch: true };
      }
      return null;
    };
  }

  onSubmitRegistrationForm(){
    console.log(this.registerationForm.value);
    if (this.registerationForm.valid) {
      console.log(this.registerationForm.value)
      const formData = this.registerationForm.value; // Extract the plain object containing form data
      try {
        this.dataStore.registerAdmin(formData).subscribe((res: any) => {
            if(res.status==='success')
            {
              this.router.navigate(['/login'])
            }
        });
      } catch (error) {
        console.error('Error occurred during login:', error);
        alert("Something is Wrong");
      }
    } else {
      console.warn('Login form is invalid');
    }
  }



 

 

}
