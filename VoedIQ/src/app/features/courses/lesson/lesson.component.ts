import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-lesson',
  template: `<ng-container #lessonContainer></ng-container>`,
})
export class LessonComponent implements AfterViewInit {
  @ViewChild('lessonContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  courseTitle: string | null = null;
  moduleTitle: string | null = null;
  lessonTitle: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngAfterViewInit(): void {
    // Luister naar router events en filter alleen NavigationEnd events
    this.listenToRouteChanges();
    // Zorg ervoor dat de eerste keer de component wordt geladen
    this.getRouteData();
  }

  private listenToRouteChanges() {
    // Luister naar router events en filter alleen NavigationEnd events
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getRouteData();
      });
  }

  private getRouteData() {
    // Verkrijg de parent routeparameters (courseTitle, moduleTitle)
    this.route.parent?.paramMap.subscribe((params) => {
      this.courseTitle = params.get('courseTitle');
      this.moduleTitle = params.get('moduleTitle');
    });

    // Verkrijg de child routeparameter (lessonTitle)
    this.route.paramMap.subscribe((params) => {
      this.lessonTitle = params.get('lessonTitle');
      if (this.courseTitle && this.moduleTitle && this.lessonTitle) {
        this.loadLessonComponent();
      }
    });
  }

  private loadLessonComponent() {
    if (this.courseTitle && this.moduleTitle && this.lessonTitle) {
      const lessonComponent = this.courseService.getLessonComponent(
        this.courseTitle,
        this.moduleTitle,
        this.lessonTitle
      );
      if (lessonComponent) {
        this.container.clear();
        this.container.createComponent(lessonComponent);
      }
    }
  }
}
