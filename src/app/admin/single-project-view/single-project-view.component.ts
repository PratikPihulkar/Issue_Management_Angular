import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../../../Services/data-store.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-single-project-view',
  templateUrl: './single-project-view.component.html',
  styleUrl: './single-project-view.component.css'
})
export class SingleProjectViewComponent implements OnInit{

  project_id:any


  asignEmpform: FormGroup;

  constructor(private router:Router , private rout: ActivatedRoute , private dataStore: DataStoreService, private fb: FormBuilder)
  {
        // this.project_id=this.rout.snapshot.paramMap.get('id');    // OR  this.project_id=parseInt( this.rout.snapshot.paramMap.get('id') );

        this.asignEmpform = this.fb.group({
          selectedMember: [null],
          selectedRole: [null]
        });

  }
  projectData:any
  ngOnInit(){

    // Get single Details by id
    // this.dataStore.getSingleProjectDetails(this.project_id).subscribe((res)=>{
    //   this.projectData=res
    // })
  }





  // For SELECT
  isEmployeeModalOpen=false

  openAddMemberModal(){
    this.isEmployeeModalOpen = true;
  }
  closeEmployeeModal() {
    this.isEmployeeModalOpen = false;
    // this.employeeForm.reset();
  }
  
  items = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
  ];

  roles=[
    {  role: 'Developer' },
    {  role: 'Tester' },
    {  role: 'Manager' }
  ]

  selectedItem: number|any; 
  loading = false; 

  onChange(event: any) {
    console.log('Selected item:', event);
  }

  // NAvbar
  changeProject(){
    this.router.navigate(['/single_project_view']);
  }


  // Update Employee Post (Add Member in Project)

    addEmpOnProject(){
      console.log(this.asignEmpform)
      // this.dataStore.assignEmpOnProject(localStorage.getItem(this.project_id),this.asignEmpform);
    }
}
