import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogServiceService } from 'src/app/shared/dialog-service.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  startDate!: Date;
  endDate!: Date;
  examName : any='';
  eligibilityCriteriaFile!: File;
  otherDetails!: string;

  pdfFile!: File;
  pdfBase64!: string;

  constructor(private route : Router,
    private dialogService: DialogServiceService) { }

  ngOnInit(): void {
  }

  submitForm() {

    console.log("submitting...............the form.............");


    this.dialogService.openConfirmationDialog('Are you sure you want to Publish?').subscribe(result => {
      if (result) {
        // User clicked "Publish"
 // Prepare form data
 const form = {
  startDate: this.startDate,
  endDate: this.endDate,
  eligibilityCriteriaFile: this.eligibilityCriteriaFile,
  otherDetails: this.otherDetails,
  examName : this.examName
};

// Send POST request to the server
fetch('/exam', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(form)
})
  .then(response => {
    if (response.ok) {
      console.log('Form data submitted successfully');
      // Handle success case here
    } else {
      console.error('Error submitting form data. Status:', response.status);
      // Handle error case here
    }
  })
  .catch(error => {
    console.error('Error submitting form data:', error);
    // Handle error case here
  });

      } else {
        // User clicked "Cancel"
        // Perform the necessary action
      }
    });

   



  }

  resetForm() {

    this.dialogService.openConfirmationDialog('Are you sure you want to Reset Form?').subscribe(result => {
      if (result) {
        console.log("reset");

      } else {
        console.log("reset");

      }
    });
  }
  
  
  
  
  cancelForm(){

    this.dialogService.openConfirmationDialog('Are you sure you want to Cancel?').subscribe(result => {
      if (result) {
        this.route.navigate(["admin-dashboard"])

      } else {
        console.log("cancel");

      }
    });
  }

  handleFileInput(event: any) {
    this.eligibilityCriteriaFile = event.target.files[0];
  }


 
}
