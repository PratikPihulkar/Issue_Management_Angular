import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.css'
})
export class BasePageComponent implements OnInit{

  projectForm: FormGroup;
  employeeForm: FormGroup

  isModalOpen = false;
  isEmployeeModalOpen = false;

  btnToggleVar=true
  empTableDisplay=false
  projectTableDisplay=true

 btnToggle() {
  this.btnToggleVar = !this.btnToggleVar;
}


  constructor(private fb: FormBuilder) {

    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    }, { validators: this.dateValidator });

    this.employeeForm = this.fb.group({
      employeeName: ['', Validators.required],
      employeeRole: ['', Validators.required],
      employeeEmail: ['', Validators.required],
      employeePassword: ['', Validators.required],
      employeePasswordConfirm: ['', Validators.required]
    },{ validators: this.passwordMatchValidator });
  }

  /////////// Custom Validateor Date

  dateValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const startDate = formGroup.get('start_date')?.value;
    const endDate = formGroup.get('end_date')?.value;

    if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
      return { dateMismatch: true };
    }
    return null;
  }

  /////////// Custom Validateor PAssword

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('employeePassword')?.value;
    const confirmPassword = formGroup.get('employeePasswordConfirm')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.btnToggle()
    // }, 2000); 
   
  }
    
  openModalforAddProject() {    
    this.isModalOpen = true;
  }

  openModalforAddEmployee() {
    this.isEmployeeModalOpen = true;
  }

  viewAllEmp(){
    this.projectTableDisplay=false
    this.empTableDisplay= true
    
  }
  viewAllProject(){
    this.projectTableDisplay=true
    this.empTableDisplay= false
  }

  closeModal() {
    this.isModalOpen = false;
    this.projectForm.reset(); 
  }

  closeEmployeeModal() {
    this.isEmployeeModalOpen = false;
    this.employeeForm.reset();
  }

  onSubmitProject() {
    if (this.projectForm.valid) {
      // Handle form submission
      console.log(this.projectForm.value);
      this.closeModal(); // Close modal after submission
    }
  }
  onSubmitEmployee() {
    if (this.employeeForm.valid) {
      // Handle form submission logic here
      console.log(this.employeeForm.value);
      this.closeEmployeeModal();
    }
  }
}
