import { Injectable } from '@angular/core';

import { Course } from '../models/course';
import { BasiskennisModule1Lesson1Component } from '../../features/courses/basiskennis_lessons/basiskennis-module1-lesson1/basiskennis-module1-lesson1.component';
import { BasiskennisModule1Lesson3Component } from '../../features/courses/basiskennis_lessons/basiskennis-module1-lesson3/basiskennis-module1-lesson3.component';
import { BasiskennisModule1Lesson2Component } from '../../features/courses/basiskennis_lessons/basiskennis-module1-lesson2/basiskennis-module1-lesson2.component';
import { BasiskennisModule2Lesson1Component } from '../../features/courses/basiskennis_lessons/basiskennis-module2-lesson1/basiskennis-module2-lesson1.component';
import { BasiskennisModule2Lesson2Component } from '../../features/courses/basiskennis_lessons/basiskennis-module2-lesson2/basiskennis-module2-lesson2.component';
import { BasiskennisModule2Lesson3Component } from '../../features/courses/basiskennis_lessons/basiskennis-module2-lesson3/basiskennis-module2-lesson3.component';
import { BasiskennisModule3Lesson1Component } from '../../features/courses/basiskennis_lessons/basiskennis-module3-lesson1/basiskennis-module3-lesson1.component';
import { BasiskennisModule3Lesson2Component } from '../../features/courses/basiskennis_lessons/basiskennis-module3-lesson2/basiskennis-module3-lesson2.component';
import { BasiskennisModule3Lesson3Component } from '../../features/courses/basiskennis_lessons/basiskennis-module3-lesson3/basiskennis-module3-lesson3.component';
import { BasiskennisModule4Lesson2Component } from '../../features/courses/basiskennis_lessons/basiskennis-module4-lesson2/basiskennis-module4-lesson2.component';
import { BasiskennisModule4Lesson1Component } from '../../features/courses/basiskennis_lessons/basiskennis-module4-lesson1/basiskennis-module4-lesson1.component';
import { BasiskennisModule4Lesson3Component } from '../../features/courses/basiskennis_lessons/basiskennis-module4-lesson3/basiskennis-module4-lesson3.component';
import { BasiskennisModule5Lesson1Component } from '../../features/courses/basiskennis_lessons/basiskennis-module5-lesson1/basiskennis-module5-lesson1.component';
import { BasisKennisIntroductieComponent } from '../../features/courses/basiskennis_lessons/basis-kennis-introductie/basis-kennis-introductie.component';

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
              route: 'introductie/les1',
              component: BasisKennisIntroductieComponent,
              completion: false,
            },
          ],
        },
        {
          title: 'Module 1 - Voeding',
          route: 'module1',
          completion: false,
          lessons: [
            {
              title: '1.1 Definitie van Voeding',
              route: 'module1/les1',
              component: BasiskennisModule1Lesson1Component,
              completion: false,
            },
            {
              title: '1.2 Waarom hebben we voeding nodig?',
              route: 'module1/les2',
              component: BasiskennisModule1Lesson2Component,
              completion: false,
            },
            {
              title: '1.3 Definitie van een dieet',
              route: 'module1/les3',
              component: BasiskennisModule1Lesson3Component,
              completion: false,
            },
          ],
        },
        {
          title: 'Module 2 - Voedingsstoffen',
          route: 'module2',
          completion: false,
          lessons: [
            {
              title: '2.1 Definitie van Voeding',
              route: 'module2/les1',
              component: BasiskennisModule2Lesson1Component,
              completion: false,
            },
            {
              title: '2.2 Waarom hebben we voeding nodig?',
              route: 'module2/les2',
              component: BasiskennisModule2Lesson2Component,
              completion: false,
            },
            {
              title: '2.3 Definitie van een dieet',
              route: 'module2/les3',
              component: BasiskennisModule2Lesson3Component,
              completion: false,
            },
          ],
        },
        {
          title: 'Module 3 - Energie',
          route: 'module3',
          completion: false,
          lessons: [
            {
              title: '3.1 De Calorie',
              route: 'module3/les1',
              component: BasiskennisModule3Lesson1Component,
              completion: false,
            },
            {
              title: '3.2 Energierijk vs. Voedingsrijk',
              route: 'module3/les2',
              component: BasiskennisModule3Lesson2Component,
              completion: false,
            },
            {
              title: '3.3 Aankomen en Afvallen',
              route: 'module3/les3',
              component: BasiskennisModule3Lesson3Component,
              completion: false,
            },
          ],
        },
        {
          title: 'Module 4 - Het Voedseletiket en Voedselbewerking',
          route: 'module4',
          completion: false,
          lessons: [
            {
              title: '4.1 Het Voedseletiket',
              route: 'module4/les1',
              component: BasiskennisModule4Lesson1Component,
              completion: false,
            },
            {
              title: '4.2 E-nummers',
              route: 'module4/les2',
              component: BasiskennisModule4Lesson2Component,
              completion: false,
            },
            {
              title: '4.3 Bewerkte Voeding',
              route: 'module4/les3',
              component: BasiskennisModule4Lesson3Component,
              completion: false,
            },
          ],
        },
        {
          title: 'Module 5 - Afronding',
          route: 'module5',
          completion: false,
          lessons: [
            {
              title: 'Cursus Afronding',
              route: 'module5/les1',
              component: BasiskennisModule5Lesson1Component,
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
