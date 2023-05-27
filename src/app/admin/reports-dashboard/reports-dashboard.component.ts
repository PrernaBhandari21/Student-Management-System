import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SelectReportComponent } from '../select-report/select-report.component';

@Component({
  selector: 'app-reports-dashboard',
  templateUrl: './reports-dashboard.component.html',
  styleUrls: ['./reports-dashboard.component.css']
})
export class ReportsDashboardComponent implements OnInit {


  constructor(
    private router : Router,
    private dialog : MatDialog,
    
  ) { }

  ngOnInit(): void {
  }


  openCreateReportComp(){
    console.log("opening create report component");
      this.router.navigate(['create-report']);

  }

  openSelectReport(){
    const dialogRef = this.dialog.open(SelectReportComponent, {
      width: '45%',

      });
  }

}
