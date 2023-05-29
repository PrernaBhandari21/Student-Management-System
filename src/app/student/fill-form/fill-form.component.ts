import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from 'src/app/form-data.service';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.css']
})
export class FillFormComponent implements OnInit {
  formGroup!: FormGroup;
  @Input() examName: string | undefined;
  @Output() submitted: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private formService : FormDataService
  ) { }

  ngOnInit(): void {

   
    // this.examName = "ABC Exam"
    console.log("this.examName =>", this.examName);



    const savedFormData = this.formService.getFormData();
    console.log("savedFormData",savedFormData);
    this.formGroup = this.formBuilder.group({
      name: [savedFormData.name || '', Validators.required],
      email: [savedFormData.email || '', [Validators.required, Validators.email]],
      fatherName: [savedFormData.fatherName || '', Validators.required],
      motherName: [savedFormData.motherName || '', Validators.required],
      address: [savedFormData.address || '', Validators.required],
      postAppliedFor: [savedFormData.postAppliedFor || '', Validators.required],
      gender: [savedFormData.gender || '', Validators.required],
      dob: [savedFormData.dob || '', Validators.required],
      attachments: this.formBuilder.group({
        '10thCertificate': [savedFormData.attachments?.['10thCertificate'] || ''],
        '12thCertificate': [savedFormData.attachments?.['12thCertificate'] || ''],
        'categoryCertificate': [savedFormData.attachments?.['categoryCertificate'] || '']
      })
    });
  }
 

  onSubmit(): void {
    if (this.formGroup.valid) {
      // Handle form submission


      //Add examName to form !!
      this.formGroup.value.examName = this.examName
      console.log(this.formGroup.value);

      this.formService.saveFormData(this.formGroup.value)
      this.submitted.emit(); // Emit the submitted event

      // fetch('/form', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(this.formGroup.value)
      // })
      //   .then(response => {
      //     console.log('Response from server:', response);
      //     if (response.ok) {
      //       // Successful operation
      
      
      
      //         alert("Report Generated Successfully ! Navigate to Existing Reports to view the result.")
      
      //     } else {
      //       // Handle error case
      //       console.error('Error sending report data to server. Status:', response.status);
      //       alert('Error sending report data to server. Please try again.');
      //     }
      //   })
      //   .catch(error => {
      //     console.error('Error sending report data to server:', error);
      //     alert('Error sending report data to server. Please try again.');
      //   });
      
    }
  }

  onAttachmentChange(event: any, attachmentKey: string): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const attachmentsControl = this.formGroup.get('attachments');
      if (attachmentsControl instanceof FormGroup) {
        attachmentsControl.get(attachmentKey)?.setValue(file);
      }
    }
  }
  

}
