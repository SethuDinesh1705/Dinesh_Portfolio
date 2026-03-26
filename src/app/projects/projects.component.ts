import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Google REWS Project',
      description: 'Developed scalable UI features for REWS under Google\'s Corp Eng (Retinue) team using Angular Dart and TypeScript. Achieved 90%+ test coverage using Page Object Model (POM) methodology. Implemented server-side pagination for 5K+ records, reducing initial data load and improving UI responsiveness. Enhanced accessibility compliance (A11y) using Parashu auditing tool.',
      image: '🔍',
      tags: ['Angular Dart', 'TypeScript', 'Test Coverage 90%+', 'Accessibility'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Natixis Banking Application',
      description: 'Redesigned and modernized key UI sections for banking administration platform. Applied responsive design principles ensuring seamless performance across mobile and desktop. Developed Angular services for real-time interactions and utilized Angular Flex Layout for dynamic, flexible layouts improving user experience.',
      image: '🏦',
      tags: ['Angular', 'Banking Domain', 'Responsive Design', 'RxJS'],
      github: '#',
      live: '#',
      featured: true
    }
  ];

  get featuredProjects() {
    return this.projects.filter(p => p.featured);
  }

  get otherProjects() {
    return this.projects.filter(p => !p.featured);
  }
}
