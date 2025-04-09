import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-lesson',
  template: `<ng-container #lessonContainer></ng-container>`,
})
export class LessonComponent implements OnInit {
  @ViewChild('lessonContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  courseTitle: string | null = null;
  moduleTitle: string | null = null;
  lessonTitle: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    console.log('LessonComponent geladen!');

    // Verkrijg de parent routeparameters (courseTitle, moduleTitle)
    this.route.parent?.paramMap.subscribe((params) => {
      this.courseTitle = params.get('courseTitle');
      this.moduleTitle = params.get('moduleTitle');
    });

    // Verkrijg de child routeparameter (lessonTitle)
    this.route.paramMap.subscribe((params) => {
      this.lessonTitle = params.get('lessonTitle');

      if (this.courseTitle && this.moduleTitle && this.lessonTitle) {
        // Haal de juiste lescomponent op
        const lessonComponent = this.courseService.getLessonComponent(
          this.courseTitle,
          this.moduleTitle,
          this.lessonTitle
        );
        console.log(lessonComponent);

        if (lessonComponent) {
          this.container.clear();
          this.container.createComponent(lessonComponent);
        }
      }
    });
  }
}
