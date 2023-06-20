import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-exam-details',
  templateUrl: './view-exam-details.component.html',
  styleUrls: ['./view-exam-details.component.css']
})
export class ViewExamDetailsComponent implements OnInit {
  
  dataSource = new MatTableDataSource([
    { studentName: 'John Doe', email: 'john.doe@example.com', gender: 'Male', dateOfBirth: '1990-01-01' },
    { studentName: 'Jane Smith', email: 'jane.smith@example.com', gender: 'Female', dateOfBirth: '1992-05-10' },
    { studentName: 'Mike Johnson', email: 'mike.johnson@example.com', gender: 'Male', dateOfBirth: '1991-08-15' },
    // Add more student data here
  ]);

  displayedColumns: string[] = ['studentName', 'email', 'gender', 'dateOfBirth', 'view'];

  constructor() { }

  ngOnInit(): void {
  }

}
