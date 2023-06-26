import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/form-data.service';

@Component({
  selector: 'app-preview-form2',
  templateUrl: './preview-form2.component.html',
  styleUrls: ['./preview-form2.component.css']
})
export class PreviewForm2Component implements OnInit {

  formData: any;

  constructor(
    private formService : FormDataService
  ) { }

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData(){
    this.formData = this.formService.getFormData();
    console.log(this.formData);
  }

}

