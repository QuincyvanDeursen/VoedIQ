import { Injectable } from '@angular/core';

import { Course } from '../models/course';
import { COURSES } from '../../../assets/data/course/course.data';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  private courses: { [key: string]: Course } = COURSES;

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
      (mod) => mod.route.toLowerCase().replace(/\s+/g, '-') === moduleTitle
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
    if (!lessonData?.lesson.component) {
      console.error('Lesson data not found!');
      return null;
    }
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

    // Als er meerdere lessen zijn
    if (lessonIndex < module.lessons.length - 1) {
      localStorage.setItem('currentLessonUrl', lesson.route.split('/')[1]); // Sla de huidige les op in local storage
      localStorage.setItem('currentModuleTitle', module.route); // Sla de huidige cursus op in local storage
      localStorage.setItem('currentCourseTitle', course.route); // Sla de huidige module op in local storage

      return module.lessons[lessonIndex + 1].route;
    }

    // Wanneer er maar één les is, ga naar de eerste les van de volgende module
    const moduleIndex = course.modules.indexOf(module);
    if (moduleIndex < course.modules.length - 1) {
      localStorage.setItem('currentLessonUrl', lesson.route.split('/')[1]); // Sla de huidige les op in local storage
      localStorage.setItem('currentModuleTitle', module.route); // Sla de huidige cursus op in local storage
      localStorage.setItem('currentCourseTitle', course.route); // Sla de huidige module op in local storage
      const nextModule = course.modules[moduleIndex + 1];

      return nextModule.lessons[0]?.route || null; // Eerste les van de volgende module
    }

    return null; // Geen volgende les of module
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
  }
}
