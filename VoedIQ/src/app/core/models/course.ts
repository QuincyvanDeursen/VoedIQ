import { Module } from './module';

export interface Course {
  title: string;
  description: string;
  route: string;
  modules: Module[];
}
