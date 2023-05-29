import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';

import { NgMaterialMultilevelMenuModule, MultilevelMenuService } from 'ng-material-multilevel-menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './shared/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './shared/login/login.component';
import { CreateExamComponent } from './admin/create-exam/create-exam.component';
import { UpdateExistingExamComponent } from './admin/update-existing-exam/update-existing-exam.component';
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { AllAvailableExamsComponent } from './student/all-available-exams/all-available-exams.component';
import {MatCardModule} from '@angular/material/card';
import { ExamRegistrationComponent } from './student/exam-registration/exam-registration.component';
import {MatRadioModule} from '@angular/material/radio';
import { ApproverComponent } from './admin/approver/approver.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEditApproverComponent } from './admin/add-edit-approver/add-edit-approver.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { CreateReportComponent } from './admin/create-report/create-report.component';
import { ResultCalculationComponent } from './admin/result-calculation/result-calculation.component';
import { SelectHeadersComponent } from './admin/select-headers/select-headers.component';
import { HeaderDialogComponent } from './admin/header-dialog/header-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReportsDashboardComponent } from './admin/reports-dashboard/reports-dashboard.component';
import { SelectReportComponent } from './admin/select-report/select-report.component';
import { StudentPersonalReportComponent } from './admin/student-personal-report/student-personal-report.component';
import { FillFormComponent } from './student/fill-form/fill-form.component';
import { PreviewFormComponent } from './student/preview-form/preview-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    LandingPageComponent,
    AuthComponent,
    LoginComponent,
    CreateExamComponent,
    UpdateExistingExamComponent,
    AllAvailableExamsComponent,
    ExamRegistrationComponent,
    ApproverComponent,
    AddEditApproverComponent,
    ConfirmationDialogComponent,
    CreateReportComponent,
    ResultCalculationComponent,
    SelectHeadersComponent,
    HeaderDialogComponent,
    ReportsDashboardComponent,
    SelectReportComponent,
    StudentPersonalReportComponent,
    FillFormComponent,
    PreviewFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialMultilevelMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule
    
  ],
  providers: [MultilevelMenuService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
