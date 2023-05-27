import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-approver',
  templateUrl: './add-edit-approver.component.html',
  styleUrls: ['./add-edit-approver.component.css']
})
export class AddEditApproverComponent implements OnInit {
  editForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEditApproverComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any,
  private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {

    
    this.editForm = this.formBuilder.group({
      name: [this.data?.name || '', Validators.required],
      designation: [this.data?.designation || '' , Validators.required],
      role: ['approver'],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

   

  }

  // Function to save the form data and close the dialog
// Function to save the form data and close the dialog
save() {
  if (this.editForm.valid) {
    const { name, email, password, role } = this.editForm.value;
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
          alert("Approver Created Successfully !!");
        } else {
          // Handle error case
          console.error('Error in creation of approver. Status:', response.status);
          alert('Error in creating approver. Please try again.');
        }
      })
      .catch(error => {
        console.error('EError in creation of approver. Error : ', error);
        alert('Error in creating approver. Please try again.');
      });

  }
}

  // Function to close the dialog without saving
  cancel() {
    this.dialogRef.close();
  }


}
