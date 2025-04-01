import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Module {
  name: string;
  chapters: { name: string; completed: boolean }[];
}

@Component({
  selector: 'app-course-container',
  imports: [CommonModule],
  templateUrl: './course-container.component.html',
  styleUrl: './course-container.component.css',
})
export class CourseContainerComponent {
  @Input() courseTitle: string = 'Dummy Title'; // Hier kun je het type van de course specificeren als je dat wilt
  modules: Module[] = [
    {
      name: 'Module 1',
      chapters: [
        { name: 'Hoofdstuk 1', completed: true },
        { name: 'Hoofdstuk 2', completed: false },
        { name: 'Hoofdstuk 3', completed: false },
      ],
    },
    {
      name: 'Module 2',
      chapters: [
        { name: 'Hoofdstuk A', completed: false },
        { name: 'Hoofdstuk B', completed: true },
      ],
    },
  ];
}
