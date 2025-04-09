import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-introduction',
  imports: [],
  templateUrl: './lesson-introduction.component.html',
  styleUrl: './lesson-introduction.component.css',
})
export class LessonIntroductionComponent implements OnInit {
  courseTitle: string | null = null;
  userName: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe((params) => {
      this.courseTitle = params.get('courseTitle');
    });
    this.getUserName(); // Verkrijg de gebruikersnaam uit local storage
    console.log('Course Name:', this.courseTitle); // Dit zou nu niet null moeten zijn
  }

  //get userName from local storage
  private getUserName() {
    this.userName = localStorage.getItem('userName') || '';
  }
  //get userEmail from local storage
}
