import { Injectable } from '@angular/core';

import { Course } from '../models/course';
import { BasiskennisDefinitionComponent } from '../../features/courses/basiskennis_lessons/basiskennis-definition/basiskennis-definition.component';
import { BasiskennisDietComponent } from '../../features/courses/basiskennis_lessons/basiskennis-diet/basiskennis-diet.component';
import { BasiskennisWhyComponent } from '../../features/courses/basiskennis_lessons/basiskennis-why/basiskennis-why.component';
import { BasiskennisMacroComponent } from '../../features/courses/basiskennis_lessons/basiskennis-macro/basiskennis-macro.component';
import { BasiskennisMicroComponent } from '../../features/courses/basiskennis_lessons/basiskennis-micro/basiskennis-micro.component';
import { BasiskennisWaterComponent } from '../../features/courses/basiskennis_lessons/basiskennis-water/basiskennis-water.component';
import { BasiskennisCaloriesComponent } from '../../features/courses/basiskennis_lessons/basiskennis-calories/basiskennis-calories.component';
import { BasiskennisDifferenceComponent } from '../../features/courses/basiskennis_lessons/basiskennis-difference/basiskennis-difference.component';
import { BasiskennisTargetComponent } from '../../features/courses/basiskennis_lessons/basiskennis-target/basiskennis-target.component';
import { BasiskennisEnumbersComponent } from '../../features/courses/basiskennis_lessons/basiskennis-enumbers/basiskennis-enumbers.component';
import { BasiskennisEtiketComponent } from '../../features/courses/basiskennis_lessons/basiskennis-etiket/basiskennis-etiket.component';
import { BasiskennisModifiedComponent } from '../../features/courses/basiskennis_lessons/basiskennis-modified/basiskennis-modified.component';
import { BasiskennisEndscreenComponent } from '../../features/courses/basiskennis_lessons/basiskennis-endscreen/basiskennis-endscreen.component';
import { BasisKennisIntroductieComponent } from '../../features/courses/basiskennis_lessons/basis-kennis-introductie/basis-kennis-introductie.component';
import { AfvallenIntroductieComponent } from '../../features/courses/afvallen_lessons/afvallen-introductie/afvallen-introductie.component';
import { AfvallenFundaments } from '../../features/courses/afvallen_lessons/afvallen-fundaments/afvallen-fundaments.component';
import { AfvallenWeightlossComponent } from '../../features/courses/afvallen_lessons/afvallen-weightloss/afvallen-weightloss.component';
import { AfvallenCrashdietComponent } from '../../features/courses/afvallen_lessons/afvallen-crashdiet/afvallen-crashdiet.component';
import { AfvallenProgressComponent } from '../../features/courses/afvallen_lessons/afvallen-progress/afvallen-progress.component';
import { AfvallenSupplementComponent } from '../../features/courses/afvallen_lessons/afvallen-supplement/afvallen-supplement.component';
import { AfvallenDensityComponent } from '../../features/courses/afvallen_lessons/afvallen-density/afvallen-density.component';
import { AfvallenPitfallComponent } from '../../features/courses/afvallen_lessons/afvallen-pitfall/afvallen-pitfall.component';
import { AfvallenTdeeComponent } from '../../features/courses/afvallen_lessons/afvallen-tdee/afvallen-tdee.component';
import { AfvallenDeficitComponent } from '../../features/courses/afvallen_lessons/afvallen-deficit/afvallen-deficit.component';
import { AfvallenAnalyseComponent } from '../../features/courses/afvallen_lessons/afvallen-analyse/afvallen-analyse.component';
import { AfvallenChangesComponent } from '../../features/courses/afvallen_lessons/afvallen-changes/afvallen-changes.component';
import { AfvallenHungerComponent } from '../../features/courses/afvallen_lessons/afvallen-hunger-lesson/afvallen-hunger.component';
import { AfvallenActionComponent } from '../../features/courses/afvallen_lessons/afvallen-action/afvallen-action.component';
import { AfvallenEndScreenComponent } from '../../features/courses/afvallen_lessons/afvallen-end-screen/afvallen-end-screen.component';
import { AfvallenTimingComponent } from '../../features/courses/afvallen_lessons/afvallen-timing/afvallen-timing.component';
import { AfvallenPlateauComponent } from '../../features/courses/afvallen_lessons/afvallen-plateau/afvallen-plateau.component';
import { AfvallenSpecialComponent } from '../../features/courses/afvallen_lessons/afvallen-special/afvallen-special.component';

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
              component: BasiskennisDefinitionComponent,
              completion: false,
            },
            {
              title: '1.2 Waarom hebben we voeding nodig?',
              route: 'module1/les2',
              component: BasiskennisWhyComponent,
              completion: false,
            },
            {
              title: '1.3 Definitie van een dieet',
              route: 'module1/les3',
              component: BasiskennisDietComponent,
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
              component: BasiskennisMacroComponent,
              completion: false,
            },
            {
              title: '2.2 Waarom hebben we voeding nodig?',
              route: 'module2/les2',
              component: BasiskennisMicroComponent,
              completion: false,
            },
            {
              title: '2.3 Definitie van een dieet',
              route: 'module2/les3',
              component: BasiskennisWaterComponent,
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
              component: BasiskennisCaloriesComponent,
              completion: false,
            },
            {
              title: '3.2 Energierijk vs. Voedingsrijk',
              route: 'module3/les2',
              component: BasiskennisDifferenceComponent,
              completion: false,
            },
            {
              title: '3.3 Aankomen en Afvallen',
              route: 'module3/les3',
              component: BasiskennisTargetComponent,
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
              component: BasiskennisEtiketComponent,
              completion: false,
            },
            {
              title: '4.2 E-nummers',
              route: 'module4/les2',
              component: BasiskennisEnumbersComponent,
              completion: false,
            },
            {
              title: '4.3 Bewerkte Voeding',
              route: 'module4/les3',
              component: BasiskennisModifiedComponent,
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
              component: BasiskennisEndscreenComponent,
              completion: false,
            },
          ],
        },
      ],
    },
    afvallen: {
      title: 'Afvallen Cursus',
      route: 'afvallen',
      description: 'Leer de basis van afvallen!',
      modules: [
        {
          title: 'Introductie',
          route: 'introductie',
          completion: false,
          lessons: [
            {
              title: 'Introductie',
              route: 'introductie/les1',
              component: AfvallenIntroductieComponent,
              completion: false,
            },
          ],
        },
        {
          title: 'Module 1 - Theorie van Afvallen',
          route: 'module1',
          completion: false,
          lessons: [
            {
              title: '1.1 Fundamenten van Afvallen',
              route: 'module1/les1',
              component: AfvallenFundaments,
              completion: false,
            },
            {
              title: '1.2 Gewichtsverlies vs. Vetverlies',
              route: 'module1/les2',
              component: AfvallenWeightlossComponent,
              completion: false,
            },
            {
              title: '1.3 Crashdiëten',
              route: 'module1/les3',
              component: AfvallenCrashdietComponent,
              completion: false,
            },

            {
              title: '1.5 Supplementen',
              route: 'module1/les4',
              component: AfvallenSupplementComponent,
              completion: false,
            },
            {
              title: '1.6 Caloriedichtheid',
              route: 'module1/les5',
              component: AfvallenDensityComponent,
              completion: false,
            },
            {
              title: '1.7 Vaakgemaakte Misverstanden',
              route: 'module1/les6',
              component: AfvallenPitfallComponent,
              completion: false,
            },
          ],
        },
        {
          title: 'Module 2 - Praktijk van Afvallen',
          route: 'module2',
          completion: false,
          lessons: [
            {
              title: '2.1 Caloriebehoefte',
              route: 'module2/les1',
              component: AfvallenTdeeComponent,
              completion: false,
            },
            {
              title: '2.2 Een plan maken',
              route: 'module2/les2',
              component: AfvallenDeficitComponent,
              completion: false,
            },
            {
              title: '2.3 Eetschema analyseren',
              route: 'module2/les3',
              component: AfvallenAnalyseComponent,
              completion: false,
            },
            {
              title: '2.4 Aanpassingen maken',
              route: 'module2/les4',
              component: AfvallenChangesComponent,
              completion: false,
            },
            {
              title: '2.5 Honger voorkomen',
              route: 'module2/les5',
              component: AfvallenHungerComponent,
              completion: false,
            },
            {
              title: '2.6 Progressie meten',
              route: 'module2/les6',
              component: AfvallenProgressComponent,
              completion: false,
            },
            {
              title: '2.7 Inzicht naar Actie',
              route: 'module2/les7',
              component: AfvallenActionComponent,
              completion: false,
            },
          ],
        },

        {
          title: 'Module 3 - Extra',
          route: 'module3',
          completion: false,
          lessons: [
            {
              title: 'Timing',
              route: 'module3/les1',
              component: AfvallenTimingComponent,
              completion: false,
            },
            {
              title: 'Plateau',
              route: 'module3/les2',
              component: AfvallenPlateauComponent,
              completion: false,
            },
            {
              title: 'Speciale Gelegenheden',
              route: 'module3/les3',
              component: AfvallenSpecialComponent,
              completion: false,
            },
          ],
        },
        {
          title: 'Feedback',
          route: 'feedback',
          completion: false,
          lessons: [
            {
              title: 'feedback',
              route: 'feedback/les1',
              component: AfvallenEndScreenComponent,
              completion: false,
            },
          ],
        },
        // Voeg hier meer modules en lessen toe
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
