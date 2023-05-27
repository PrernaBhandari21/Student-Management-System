import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditApproverComponent } from '../add-edit-approver/add-edit-approver.component';


@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css']
})


export class ApproverComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ELEMENT_DATA: any[] = [
    {ApproverName: 'Riya', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Jaanvi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Tushita', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
    {ApproverName: 'Priyanshi', userId: 'pri@gmail.com',  phoneNo:8178298372, registeredDate:"2023-05-01"},
  
  ];

  ngOnInit(): void {
  }


  displayedColumns: string[] = ['sno', 'approvername', 'userid','phoneNo','registeredDate','edit'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openEditDialog(element?: any): void {
    const dialogRef = this.dialog.open(AddEditApproverComponent, {
      width: '400px', // Adjust the width as needed
      data: element // Pass the element data to the dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the dialog is closed, if needed
    });
  }
}
