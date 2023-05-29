import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/form-data.service';

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.css']
})
export class PreviewFormComponent implements OnInit {
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
