import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditApproverComponent } from '../add-edit-approver/add-edit-approver.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css']
})


export class ApproverComponent implements OnInit {

  constructor(private dialog : MatDialog,
    private http : HttpClient) { }

  ELEMENT_DATA: any[] =[]

  ngOnInit(): void {
    this.fetchApprovers();
  }

  fetchApprovers(): void {
    this.http.get<any[]>('http://localhost:4200/approvers').subscribe(
      (data:any) => {
        
        // this.ELEMENT_DATA = data;
        const approversList= data["approvers"]
        this.ELEMENT_DATA = approversList;

        console.log("this.ELEMENT_DATA",this.ELEMENT_DATA);
        this.dataSource.data = this.ELEMENT_DATA;
      },
      error => {
        // Handle error response here
        console.error(error);
      }
    );
  }

displayedColumns: string[] = ['sno', 'name', 'designation', 'email', 'edit'];
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
