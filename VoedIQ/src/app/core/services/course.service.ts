import { Injectable } from '@angular/core';

import { LessonDummyComponent } from '../../features/courses/lesson-dummy/lesson-dummy.component';
import { LessonIntroductionComponent } from '../../features/courses/lesson-introduction/lesson-introduction.component';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  private courses: { [key: string]: Course } = {
    basiskennis: {
      title: 'Basiskennis Cursus',
      route: 'basiskennis',
      description: 'Leer de basis van kennis!',
      modules: [
        {
          title: 'Introductie',
          route: 'introductie',
          completion: false,
          lessons: [
            {
              title: 'Introductie',
              route: 'introductie/intro1',
              component: LessonIntroductionComponent,
              completion: false,
            },
            {
              title: 'Dummy 1',
              route: 'introductie/dummy',
              component: LessonDummyComponent,
              completion: false,
            },
          ],
        },
        {
          title: 'Module1',
          route: 'module1',
          completion: false,
          lessons: [
            {
              title: 'Introductie 2',
              route: 'module1/introductie2',
              component: LessonIntroductionComponent,
              completion: false,
            },
            {
              title: 'Dummy 2',
              route: 'module1/dummy2',
              component: LessonDummyComponent,
              completion: false,
            },
          ],
        },
      ],
    },
  };

  getCourse(courseTitle: string): Course | undefined {
    return this.courses[courseTitle];
  }

  private getLesson(
    courseTitle: string,
    moduleTitle: string,
    lessonTitle: string
  ) {
    const course = this.getCourse(courseTitle);
    if (!course) {
      console.error(`Course ${courseTitle} not found`);
      return null;
    }

    const module = course.modules.find(
      (mod) => mod.title.toLowerCase().replace(/\s+/g, '-') === moduleTitle
    );
    if (!module) {
      console.error(`Module ${moduleTitle} not found in course ${courseTitle}`);
      return null;
    }

    const lesson = module.lessons.find(
      (lesson) => lesson.route === moduleTitle + '/' + lessonTitle
    );
    if (!lesson) {
      console.error(
        `Lesson ${lessonTitle} not found in module ${module.title}`
      );
      return null;
    }

    return { course, module, lesson };
  }

  getLessonComponent(
    courseTitle: string,
    moduleTitle: string,
    lessonTitle: string
  ): any {
    const lessonData = this.getLesson(courseTitle, moduleTitle, lessonTitle);
    return lessonData ? lessonData.lesson.component : null;
  }

  getNextLessonUrl(
    courseTitle: string,
    moduleTitle: string,
    lessonTitle: string
  ): string | null {
    const lessonData = this.getLesson(courseTitle, moduleTitle, lessonTitle);
    if (!lessonData) return null;

    const { course, module, lesson } = lessonData;
    const lessonIndex = module.lessons.indexOf(lesson);

    if (lessonIndex < module.lessons.length - 1) {
      return module.lessons[lessonIndex + 1].route;
    }

    // Check for the next module
    const moduleIndex = course.modules.indexOf(module);
    if (moduleIndex < course.modules.length - 1) {
      const nextModule = course.modules[moduleIndex + 1];
      return nextModule.lessons[0]?.route || null; // First lesson of the next module
    }

    return null; // No next lesson or module
  }

  getPreviousLessonUrl(
    courseTitle: string,
    moduleTitle: string,
    lessonTitle: string
  ): string | null {
    const lessonData = this.getLesson(courseTitle, moduleTitle, lessonTitle);
    if (!lessonData) {
      console.log('Geen les gevonden!');
      return null;
    }

    const { course, module, lesson } = lessonData;
    const lessonIndex = module.lessons.indexOf(lesson);

    if (lessonIndex > 0) {
      const previousLesson = module.lessons[lessonIndex - 1];
      return previousLesson.route;
    }

    // Check for the previous module
    const moduleIndex = course.modules.indexOf(module);
    if (moduleIndex > 0) {
      const previousModule = course.modules[moduleIndex - 1];
      return (
        previousModule.lessons[previousModule.lessons.length - 1]?.route || null
      ); // Last lesson of the previous module
    }

    return null;
  }

  completeLesson(
    courseTitle: string,
    moduleTitle: string,
    lessonTitle: string
  ): void {
    const lessonData = this.getLesson(courseTitle, moduleTitle, lessonTitle);
    if (!lessonData) return;

    const { lesson } = lessonData;
    lesson.completion = true; // Markeer de les als voltooid

    //als alle lessen in de module zijn voltooid, markeer de module als voltooid
    const module = lessonData.module;
    const allLessonsCompleted = module.lessons.every(
      (lesson) => lesson.completion
    );
    if (allLessonsCompleted) {
      module.completion = true; // Markeer de module als voltooid
    }
    //als alle modules in de cursus zijn voltooid, markeer de cursus als voltooid

    // Hier kun je ook logica toevoegen om de voortgang op te slaan in local storage of een backend
    // Bijvoorbeeld: localStorage.setItem('completedLessons', JSON.stringify(this.courses));
  }
}
