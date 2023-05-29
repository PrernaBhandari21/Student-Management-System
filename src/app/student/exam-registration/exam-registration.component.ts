import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-registration',
  templateUrl: './exam-registration.component.html',
  styleUrls: ['./exam-registration.component.css']
})
export class ExamRegistrationComponent implements OnInit {
  examName: any;
  currentStep: number = 1;

  constructor(
    private activatedRoute : ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params =>{
      this.examName = params["examName"];
    })
    // this.examName = "ABC Exam"
    console.log("this.examName =>", this.examName);



  }

  selectStep(step: number) {
    this.currentStep = step;
  }
  

  onSubmit(): void {
   
  }



}
