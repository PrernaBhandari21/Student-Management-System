import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from 'src/app/form-data.service';

@Component({
  selector: 'app-fill-format2',
  templateUrl: './fill-format2.component.html',
  styleUrls: ['./fill-format2.component.css']
})
export class FillFormat2Component implements OnInit {
  formGroup!: FormGroup;
  degreeColumns = ['degree', 'university', 'year', 'marksObtained', 'totalMarks', 'action'];
  @Input() examName: string | undefined;
  @Output() submitted: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private formService : FormDataService,
    private formBuilder : FormBuilder
  ) { }

ngOnInit(): void {

  console.log("this.exam =>", this.examName);


    const savedFormData = this.formService.getFormData();
    this.formGroup = this.formBuilder.group({
      department: ['', Validators.required],
      applicantName: [savedFormData.applicantName || '', Validators.required],
      gender: [savedFormData.gender || '', Validators.required],
      dob: [savedFormData.dob || '', Validators.required],
      category: ['', Validators.required],
      fatherName: [savedFormData.fatherName || '', Validators.required],
      motherName: [savedFormData.motherName || '', Validators.required],
      address: [savedFormData.address || '', Validators.required],
      contactNo:[savedFormData.contactNo || '', Validators.required],
      email: [savedFormData.email || '', Validators.required],
      state: [''],
      issuingAuthority: [''],
      registrationNo: [''],
      pwdCategory: [''],
      // degrees: this.formBuilder.array([]),
      attachments: this.formBuilder.group({
        'AgeProof': [savedFormData.attachments?.['AgeProof'] || ''],
        'categoryCertificate': [savedFormData.attachments?.['categoryCertificate'] || ''],
        'BDS_Degree_with_all_marksheets': [savedFormData.attachments?.['BDS_Degree_with_all_marksheets'] || ''],
        'Internship_Completion_Certificate': [savedFormData.attachments?.['Internship_Completion_Certificate'] || ''],
        'MDS_Degree_or_Provisional_Certificate': [savedFormData.attachments?.['MDS_Degree_or_Provisional_Certificate'] || ''],
        'Valid_State_Dental_Council_Reg_Certificate': [savedFormData.attachments?.['Valid_State_Dental_Council_Reg_Certificate'] || ''],
        'Experience_Certificate': [savedFormData.attachments?.['Experience_Certificate'] || ''],
        'PassportSizePhoto': [savedFormData.attachments?.['PassportSizePhoto'] || ''],
        'Signature_of_candidate': [savedFormData.attachments?.['Signature_of_candidate'] || '']

      })
    });
  }

  get degrees(): FormArray {
    return this.formGroup.get('degrees') as FormArray;
  }
  onSubmit(): void {
    if (this.formGroup.valid) {
      // Handle form submission

      // Add examName to form
      this.formGroup.value.examName = this.examName;

      console.log(this.formGroup.value);

      this.formService.saveFormData(this.formGroup.value);
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

  // addBlankRow() {
  //   const degreeFormGroup = this.formBuilder.group({
  //     degree: ['', Validators.required],
  //     university: ['', Validators.required],
  //     year: ['', Validators.required],
  //     marksObtained: ['', Validators.required],
  //     totalMarks: ['', Validators.required]
  //   });

  //   this.degrees.push(degreeFormGroup);
  // }

  // removeDegree(index: number) {
  //   this.degrees.removeAt(index);
  // }
  
}
