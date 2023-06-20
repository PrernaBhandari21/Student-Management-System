import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approver-view-exams',
  templateUrl: './approver-view-exams.component.html',
  styleUrls: ['./approver-view-exams.component.css']
})
export class ApproverViewExamsComponent implements OnInit {


  examDetails : any;
  dataSource = new MatTableDataSource([
    { nameOfExam: 'Exam 1', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 2', all: 15, reviewed: 10, pending: 5 },
    { nameOfExam: 'Exam 3', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 4', all: 15, reviewed: 10, pending: 5 },  
    { nameOfExam: 'Exam 5', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 6', all: 15, reviewed: 10, pending: 5 },
    { nameOfExam: 'Exam 7', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 8', all: 15, reviewed: 10, pending: 5 },
    { nameOfExam: 'Exam 1', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 2', all: 15, reviewed: 10, pending: 5 },
    { nameOfExam: 'Exam 3', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 4', all: 15, reviewed: 10, pending: 5 },  
    { nameOfExam: 'Exam 5', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 6', all: 15, reviewed: 10, pending: 5 },
    { nameOfExam: 'Exam 7', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 8', all: 15, reviewed: 10, pending: 5 },
    { nameOfExam: 'Exam 1', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 2', all: 15, reviewed: 10, pending: 5 },
    { nameOfExam: 'Exam 3', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 4', all: 15, reviewed: 10, pending: 5 },  
    { nameOfExam: 'Exam 5', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 6', all: 15, reviewed: 10, pending: 5 },
    { nameOfExam: 'Exam 7', all: 10, reviewed: 5, pending: 5 },
    { nameOfExam: 'Exam 8', all: 15, reviewed: 10, pending: 5 },
  ]);

  displayedColumns: string[] = ['nameOfExam', 'all', 'reviewed', 'pending', 'view'];

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {

    this.examDetails = {
      
    }
  }

  openExamDetails(){
    console.log("Opening");

    this.router.navigate(["view-exam-details"]);
  }



}
