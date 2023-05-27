import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exam-registration',
  templateUrl: './exam-registration.component.html',
  styleUrls: ['./exam-registration.component.css']
})
export class ExamRegistrationComponent implements OnInit {
  examName: any;
  formGroup!: FormGroup;

  constructor(
    private activatedRoute : ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params =>{
      this.examName = params["examName"];
    })
    // this.examName = "ABC Exam"
    console.log("this.examName =>", this.examName);



    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      address: ['', Validators.required],
      postAppliedFor: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      attachments: this.formBuilder.group({
        '10thCertificate': [''],
        '12thCertificate': [''],
        'categoryCertificate': ['']
      }),
      
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      // Handle form submission


      //Add examName to form !!
      this.formGroup.value.examName = this.examName
      console.log(this.formGroup.value);

      fetch('/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formGroup.value)
      })
        .then(response => {
          console.log('Response from server:', response);
          if (response.ok) {
            // Successful operation
      
      
      
              alert("Report Generated Successfully ! Navigate to Existing Reports to view the result.")
      
          } else {
            // Handle error case
            console.error('Error sending report data to server. Status:', response.status);
            alert('Error sending report data to server. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error sending report data to server:', error);
          alert('Error sending report data to server. Please try again.');
        });
      
    }
  }

  onAttachmentChange(event: any, attachmentKey: string): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.formGroup.get('attachments')?.get(attachmentKey)?.setValue(file);
    }
  }

}
