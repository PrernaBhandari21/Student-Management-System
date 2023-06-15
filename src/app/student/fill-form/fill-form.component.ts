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
  @Input() examId : string | undefined;
  @Output() submitted: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private formService : FormDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log(params); // Check if the examId parameter is present here
      this.examId = params["examId"];
      this.examName = params["examName"]
      console.log(this.examId); // Check if the examId value is assigned correctly
    });
   
    // this.examName = "ABC Exam"
    console.log("this.examName =>", this.examName);


    console.log("this.examId ==========>>>>>", this.examId);


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

      console.log("Exam NAME ", this.examName);
      console.log("EXAM ID ",this.examId);

      //Add examName to form !!
      // this.formGroup.value.examName = this.examName
      console.log(this.formGroup.value);

      this.formService.saveFormData(this.formGroup.value)
      this.submitted.emit(); // Emit the submitted event

      
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
