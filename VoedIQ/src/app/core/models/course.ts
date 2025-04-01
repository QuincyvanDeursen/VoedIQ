export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
}
export interface Chapter {
  id: string;
  title: string;
  content: Content[];
  completed: boolean;
}
export interface Content {
  title?: string;
  description?: string;
  imageUrl?: string;
  courseId?: string;
  moduleId?: string;
}
