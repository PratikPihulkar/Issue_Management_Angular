import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-base-page',
  templateUrl: './user-base-page.component.html',
  styleUrl: './user-base-page.component.css'
})
export class UserBasePageComponent {
  issueForm: FormGroup;
  issues: any[] = [];
  closedIssues: any[] = [];
  view: string = 'addIssue';

  constructor(private fb: FormBuilder) {
    this.issueForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      deadline: ['', Validators.required],
    });
  }

  addIssue() {
    if (this.issueForm.valid) {
      const newIssue = this.issueForm.value;
      if (newIssue.status === 'closed') {
        this.closedIssues.push(newIssue);
      } else {
        this.issues.push(newIssue);
      }
      this.issueForm.reset();
    }
  }
}
