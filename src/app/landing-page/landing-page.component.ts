import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  showSideMenu: boolean | undefined;
  exams: any[] = [];


  constructor(private activatedRoute: ActivatedRoute,
    private route : Router) {}

  ngOnInit(): void {
    this.showSideMenu = this.activatedRoute.snapshot.data['showSideMenu'] ?? true;
    this.exams = [
      { name: 'ABC Exam', imagePath: '../../assets/images/dummy-pic2.jpg' },
      { name: 'XYC Exam', imagePath: '../../assets/images/dummy-pic2.jpg' },
      { name: 'PPC Exam', imagePath: '../../assets/images/dummy-pic2.jpg' }
    ];
  }

  navigate(){
    this.route.navigate(['login'])
  }

}
