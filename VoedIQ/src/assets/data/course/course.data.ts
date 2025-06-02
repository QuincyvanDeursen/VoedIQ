import { Course } from '../../../app/core/models/course';
import { AfvallenActionComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-action/afvallen-action.component';
import { AfvallenAnalyseComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-analyse/afvallen-analyse.component';
import { AfvallenChangesComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-changes/afvallen-changes.component';
import { AfvallenCrashdietComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-crashdiet/afvallen-crashdiet.component';
import { AfvallenDeficitComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-deficit/afvallen-deficit.component';
import { AfvallenDensityComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-density/afvallen-density.component';
import { AfvallenEndScreenComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-end-screen/afvallen-end-screen.component';
import { AfvallenFundaments } from '../../../app/features/courses/afvallen_lessons/afvallen-fundaments/afvallen-fundaments.component';
import { AfvallenHungerComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-hunger-lesson/afvallen-hunger.component';
import { AfvallenIntroductieComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-introductie/afvallen-introductie.component';
import { AfvallenPitfallComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-pitfall/afvallen-pitfall.component';
import { AfvallenPlateauComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-plateau/afvallen-plateau.component';
import { AfvallenProgressComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-progress/afvallen-progress.component';
import { AfvallenSpecialComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-special/afvallen-special.component';
import { AfvallenSupplementComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-supplement/afvallen-supplement.component';
import { AfvallenTdeeComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-tdee/afvallen-tdee.component';
import { AfvallenTimingComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-timing/afvallen-timing.component';
import { AfvallenWeightlossComponent } from '../../../app/features/courses/afvallen_lessons/afvallen-weightloss/afvallen-weightloss.component';
import { BasisKennisIntroductieComponent } from '../../../app/features/courses/basiskennis_lessons/basis-kennis-introductie/basis-kennis-introductie.component';
import { BasiskennisCaloriesComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-calories/basiskennis-calories.component';
import { BasiskennisDefinitionComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-definition/basiskennis-definition.component';
import { BasiskennisDietComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-diet/basiskennis-diet.component';
import { BasiskennisDifferenceComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-difference/basiskennis-difference.component';
import { BasiskennisEndscreenComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-endscreen/basiskennis-endscreen.component';
import { BasiskennisEnumbersComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-enumbers/basiskennis-enumbers.component';
import { BasiskennisEtiketComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-etiket/basiskennis-etiket.component';
import { BasiskennisMacroComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-macro/basiskennis-macro.component';
import { BasiskennisMicroComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-micro/basiskennis-micro.component';
import { BasiskennisModifiedComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-modified/basiskennis-modified.component';
import { BasiskennisTargetComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-target/basiskennis-target.component';
import { BasiskennisWaterComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-water/basiskennis-water.component';
import { BasiskennisWhyComponent } from '../../../app/features/courses/basiskennis_lessons/basiskennis-why/basiskennis-why.component';
import { GezondetenAnalyseComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-analyse/gezondeten-analyse.component';
import { GezondetenChangesComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-changes/gezondeten-changes.component';
import { GezondetenCulpritComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-culprit/gezondeten-culprit.component';
import { GezondetenDefinitionComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-definition/gezondeten-definition.component';
import { GezondetenEndscreenComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-endscreen/gezondeten-endscreen.component';
import { GezondetenIntroductieComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-introductie/gezondeten-introductie.component';
import { GezondetenMacromicroComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-macromicro/gezondeten-macromicro.component';
import { GezondetenTdeeComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-tdee/gezondeten-tdee.component';
import { GezondetenTipsComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-tips/gezondeten-tips.component';
import { GezondetenWaterComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-water/gezondeten-water.component';
import { GezondetenWhatComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-what/gezondeten-what.component';
import { GezondetenWhyComponent } from '../../../app/features/courses/gezondeten_lessons/gezondeten-why/gezondeten-why.component';

// 🔹 Losse variabelen
export const BASISKENNIS_COURSE: Course = {
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
};

export const AFVALLEN_COURSE: Course = {
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
};

export const GEZOND_COURSE: Course = {
  title: 'Gezond eten Cursus',
  route: 'gezondeten',
  description: 'Leer de basis van gezond eten!',
  modules: [
    {
      title: 'Introductie',
      route: 'introductie',
      completion: false,
      lessons: [
        {
          title: 'Introductie',
          route: 'introductie/les1',
          component: GezondetenIntroductieComponent,
          completion: false,
        },
      ],
    },
    {
      title: 'Module 1 - Theorie van Gezond Eten',
      route: 'module1',
      completion: false,
      lessons: [
        {
          title: '1.1 Definitie van Gezond Eten',
          route: 'module1/les1',
          component: GezondetenDefinitionComponent,
          completion: false,
        },
        {
          title: '1.2 Waarom is Gezond Eten?',
          route: 'module1/les2',
          component: GezondetenWhyComponent,
          completion: false,
        },
        {
          title: '1.3 Wat heb je nodig?',
          route: 'module1/les3',
          component: GezondetenWhatComponent,
          completion: false,
        },

        {
          title: '1.4 Water',
          route: 'module1/les4',
          component: GezondetenWaterComponent,
          completion: false,
        },
        {
          title: '1.5 Vezels, suiker, en zout',
          route: 'module1/les5',
          component: GezondetenCulpritComponent,
          completion: false,
        },
      ],
    },
    {
      title: 'Module 2 - Praktijk van Gezond Eten',
      route: 'module2',
      completion: false,
      lessons: [
        {
          title: '2.1 Caloriebehoefte',
          route: 'module2/les1',
          component: GezondetenTdeeComponent,
          completion: false,
        },
        {
          title: '2.2 Nutriënt Behoefte',
          route: 'module2/les2',
          component: GezondetenMacromicroComponent,
          completion: false,
        },
        {
          title: '2.3 Analyse van je Eetpatroon',
          route: 'module2/les3',
          component: GezondetenAnalyseComponent,
          completion: false,
        },
        {
          title: '2.4 Aanpassingen maken',
          route: 'module2/les4',
          component: GezondetenChangesComponent,
          completion: false,
        },
        {
          title: '2.5 Praktische Tips',
          route: 'module2/les5',
          component: GezondetenTipsComponent,
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
          component: GezondetenEndscreenComponent,
          completion: false,
        },
      ],
    },
    // Voeg hier meer modules en lessen toe
  ],
};

// 🔹 Samengevoegd object
export const COURSES: { [key: string]: Course } = {
  basiskennis: BASISKENNIS_COURSE,
  afvallen: AFVALLEN_COURSE,
  gezond: GEZOND_COURSE,
};
