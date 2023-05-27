import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './shared/auth/auth.component';
import { LoginComponent } from './shared/login/login.component';
import { CreateExamComponent } from './admin/create-exam/create-exam.component';
import { AllAvailableExamsComponent } from './student/all-available-exams/all-available-exams.component';
import { ExamRegistrationComponent } from './student/exam-registration/exam-registration.component';
import { ApproverComponent } from './admin/approver/approver.component';
import { CreateReportComponent } from './admin/create-report/create-report.component';
import { ResultCalculationComponent } from './admin/result-calculation/result-calculation.component';
import { ReportsDashboardComponent } from './admin/reports-dashboard/reports-dashboard.component';
import { StudentPersonalReportComponent } from './admin/student-personal-report/student-personal-report.component';

const routes: Routes = [
  {
    path:"admin-dashboard",
    component:DashboardComponent
  },
  {
    path:"landing-page" || "",
    component:LandingPageComponent,
    data: {
      showSideMenu: false
    }
  },
  {
    path:"auth",
    component:AuthComponent,
    data: {
      showSideMenu: false
    }
  },
  {
    path:"login",
    component:LoginComponent,
    data: {
      showSideMenu: false
    }
  },
  {
    path:"create-exam",
    component:CreateExamComponent
  },
  {
    path:"all-available-exams",
    component:AllAvailableExamsComponent
  },
  {
    path:"student-registration-form",
    component:ExamRegistrationComponent
  },
  {
    path:"approver",
    component:ApproverComponent
  },
  {
    path:"create-report",
    component:CreateReportComponent
  },
  {
    path:"result-calculation",
    component:ResultCalculationComponent
  },
  {
    path:"reports-dashboard",
    component:ReportsDashboardComponent
  },
  {
    path:"student-personal-report",
    component:StudentPersonalReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
