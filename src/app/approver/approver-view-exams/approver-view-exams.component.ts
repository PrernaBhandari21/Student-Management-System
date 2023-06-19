import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
    // Add more data as needed
  ]);

  displayedColumns: string[] = ['nameOfExam', 'all', 'reviewed', 'pending'];

  constructor() { }

  ngOnInit(): void {

    this.examDetails = {
      
    }
  }



}
