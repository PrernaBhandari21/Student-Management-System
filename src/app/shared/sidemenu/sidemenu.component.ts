import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from '../dialog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  appitems: any = [];

  config = {
    paddingAtStart: true,
    classname: "side-nav-menu",
    fontColor: "#000",
    selectedListFontColor: "#267fff",
    // backgroundColor: "#dad6ff",
    highlightOnSelect: true,
    useDividers: false,
    collapseOnSelect: true,
  };
	storedUser: any;
  constructor(private dialogService : DialogServiceService,
	private router : Router) { }

  ngOnInit(): void {

	const storedUserString = localStorage.getItem('user');
	if (storedUserString) {
	  this.storedUser = JSON.parse(storedUserString);
	  console.log('Stored User Info:', this.storedUser);
	} else {
	  console.log('User information not found in localStorage');
	}

	if(this.storedUser.role == "admin"){
		this.appitems = [
			{
				label: "Dashboard",
				link: "/admin-dashboard",
				icon: "leaderboard"
			},
			{
			  label: "Available Exams",
			  link: "/all-available-exams",
			  icon: "pets"
			},			
			{
			  label: "Approvers List",
			  link: "/approver",
			  icon: "assignment"
			},
			{
				label: "Create Report",
				link: "/create-report",
				icon: "assignment"
			  },
			  {
				label : "Result-Calculation",
				link:"result-calculation",
				icon:"assignment"
			},
			{
				label : "Reports-Dashboard",
				link:"reports-dashboard",
				icon:"assignment"
			},
			{
				label:"Logout",
				link:"/landing-page",
				icon:"profile"
			},
			
		
			
		];
	}else if(this.storedUser.role == "student"){
		this.appitems = [
			{
			  label: "Available Exams",
			  link: "/all-available-exams",
			  icon: "pets"
			},			
			{
				label: "Register For Exams",
				link: '/student-registration-form',
				icon: "group",
			},
			,
			{
				label:"Logout",
				// link:"/landing-page",
				icon:"person",
				onSelected: () => {
					this.openLogoutModal();
				  } 
			}

			
		];
	}


  }


  openLogoutModal(){
	this.dialogService.openConfirmationDialog('Are you sure you want to Logout?').subscribe(result => {
		if (result) {
		  console.log("reset");
		  localStorage.clear();
		  this.router.navigate(["landing-page"])
  
		} else {
		  console.log("reset");
  
		}
	  });
  }

}
