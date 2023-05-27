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

  constructor(
    private http : HttpClient,
    private datePipe: DatePipe,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getExams();
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
  

  applyNow(examName: string) {
    this.router.navigate(['/student-registration-form'], { queryParams: { examName: examName } });
  }
  
}
