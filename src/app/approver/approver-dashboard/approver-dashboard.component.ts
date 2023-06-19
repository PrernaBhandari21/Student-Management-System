import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approver-dashboard',
  templateUrl: './approver-dashboard.component.html',
  styleUrls: ['./approver-dashboard.component.css']
})
export class ApproverDashboardComponent implements OnInit {

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
  }


  navigateToViewExams(){
    this.route.navigate(["exam-details"]);
  }
}
