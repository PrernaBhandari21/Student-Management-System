import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-available-exams',
  templateUrl: './all-available-exams.component.html',
  styleUrls: ['./all-available-exams.component.css'],
  providers: [DatePipe]
})
export class AllAvailableExamsComponent implements OnInit {
  exams: any[] = [];
  storedUser: any;
  applyForExam : boolean = false;

  constructor(
    private http : HttpClient,
    private datePipe: DatePipe,
    private router : Router
  ) { }

  async ngOnInit() {
    await this.getRole();
    this.getExams();

  }

  getRole(){
    const storedUserString = localStorage.getItem('user');
	if (storedUserString) {
	  this.storedUser = JSON.parse(storedUserString);
	  console.log('Stored User Info:', this.storedUser);
	} else {
	  console.log('User information not found in localStorage');
	}

  if(this.storedUser.role == "student"){
    this.applyForExam = true;
  }else{
    this.applyForExam = false;
  }
  }

  getExams(): void {
    this.http.get<any[]>('/exam')
      .subscribe(
        (response: any) => {
          const exams = response['Existing Exams'];
          this.exams = exams.map((exam: any) => ({
            ...exam,
            startDate: this.datePipe.transform(exam.startDate, 'dd MMM yyyy'),
            endDate: this.datePipe.transform(exam.endDate, 'dd MMM yyyy')
          }));
          console.log('this.exams:', this.exams);
        },
        error => {
          console.error('Error retrieving exams:', error);
        }
      );
  }
  

  applyNow(exam: any) {

    console.log("exam: ", exam);
    console.log("exam.examId ===========> ",exam.examId);
    
    this.router.navigate(['/student-registration-form'], { queryParams: { examName: exam.examName,
       examFormat : exam.registrationFormat ,
        examId : exam.examId } });
  }
  
}
