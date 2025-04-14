import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CourseService } from '../../../core/services/course.service';
import { Course } from '../../../core/models/course';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './course-container.component.html',
  styleUrl: './course-container.component.css',
})
export class CourseContainerComponent implements OnInit {
  course: Course | undefined;
  courseTitle: string | null = null;
  moduleTitle: string | null = null;
  lessonTitle: string | null = null;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.extractRouteData(this.route);
    // Dan: reageren op navigaties binnen de app
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.extractRouteData(this.route);
      });
  }

  // Extractor die ook door child routes heen loopt
  private extractRouteData(route: ActivatedRoute) {
    const currentRoute = this.getCurrentRoute(route);

    this.courseTitle = route.snapshot.paramMap.get('courseTitle');
    this.moduleTitle = route.snapshot.paramMap.get('moduleTitle');
    this.lessonTitle = currentRoute.snapshot.paramMap.get('lessonTitle');

    if (this.courseTitle) {
      this.course = this.courseService.getCourse(this.courseTitle);
    }
  }

  // Helper om de diepste (actieve) route te pakken
  private getCurrentRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  // Ga naar de volgende les
  goToNextLesson() {
    if (!this.courseTitle || !this.moduleTitle || !this.lessonTitle) return;
    this.courseService.completeLesson(
      this.courseTitle,
      this.moduleTitle,
      this.lessonTitle
    );
    const nextLesson = this.courseService.getNextLessonUrl(
      this.courseTitle,
      this.moduleTitle,
      this.lessonTitle
    );

    if (nextLesson) {
      const nextLessonModule = nextLesson.split('/')[0]; // Haal de module titel uit de URL
      const nextLessonTitle = nextLesson.split('/')[1]; // Haal de les titel uit de URL
      this.router.navigate([
        'cursus',
        this.courseTitle,
        nextLessonModule,
        nextLessonTitle,
      ]);
    }

    // Markeer de huidige les als voltooid
  }

  // Ga naar de vorige les
  goToPreviousLesson() {
    if (!this.courseTitle || !this.moduleTitle || !this.lessonTitle) return;

    const prevLesson = this.courseService.getPreviousLessonUrl(
      this.courseTitle,
      this.moduleTitle,
      this.lessonTitle
    );

    if (prevLesson) {
      const prevLessonModule = prevLesson.split('/')[0]; // Haal de module titel uit de URL
      const prevLessonTitle = prevLesson.split('/')[1]; // Haal de les titel uit de URL
      this.router.navigate([
        'cursus',
        this.courseTitle,
        prevLessonModule,
        prevLessonTitle,
      ]);
    }
  }
}
