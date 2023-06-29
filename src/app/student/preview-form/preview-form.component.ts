import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormDataService } from 'src/app/form-data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.css']
})
export class PreviewFormComponent implements OnInit {
  formData: any;
  @ViewChild('formContent', { static: false }) formContent!: ElementRef;

  constructor(
    private formService : FormDataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData(){
    // this.formData = this.formService.getFormData();
    this.formData =  {
      attachments: {
        '10thCertificate': {
          name: 'dummy-10th-certificate.pdf', 
          url: 'https://www.orimi.com/pdf-test.pdf' 
        },
        '12thCertificate': {
          name: 'dummy-12th-certificate.pdf', 
          url: 'https://www.orimi.com/pdf-test.pdf' 
        },
        'categoryCertificate': {
          name: 'dummy-categoryCertificate.pdf', 
          url: 'https://www.orimi.com/pdf-test.pdf' 
        }
        
      }
      // Add other form data properties
    };
    console.log(this.formData);
  }

  getPdfUrl(attachment: any): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(attachment.url);
  }

  generatePDF(): void {
    const pdf = new jsPDF();
  
    // Get the HTML element to be converted to PDF
    const element = document.getElementById('pdfContent');
  
    // Check if the element exists before proceeding
    if (element) {
      // Convert HTML to canvas using html2canvas
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  
        // Save the PDF
        pdf.save('preview.pdf');
      });
    }
  }
  
  

}
