import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  formData: any = {};

  saveFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }
}
