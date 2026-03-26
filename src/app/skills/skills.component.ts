import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Skill {
  category: string;
  items: SkillItem[];
  icon: string;
}

interface SkillItem {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatCardModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      category: 'Web Technologies',
      icon: 'code',
      items: [
        { name: 'Angular & Angular Dart', level: 96 },
        { name: 'TypeScript', level: 94 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'JavaScript (ES6+)', level: 96 }
      ]
    },
    {
      category: 'Advanced Skills',
      icon: 'build',
      items: [
        { name: 'RxJS & Observables', level: 90 },
        { name: 'Angular Material & Flex Layout', level: 94 },
        { name: 'Responsive Design', level: 96 },
        { name: 'Accessibility (A11y) Compliance', level: 92 }
      ]
    },
    {
      category: 'Testing & Tools',
      icon: 'settings',
      items: [
        { name: 'Karma & Jasmine', level: 90 },
        { name: 'Git, GitHub & Bitbucket', level: 93 },
        { name: 'REST API & gRPC', level: 88 },
        { name: 'Agile (SCRUM)', level: 92 }
      ]
    },
    {
      category: 'Additional Skills',
      icon: 'terminal',
      items: [
        { name: 'NodeJS (Backend)', level: 75 },
        { name: 'Core Java', level: 80 },
        { name: 'Dart', level: 78 },
        { name: 'GitHub Copilot & AI Tools', level: 92 }
      ]
    }
  ];
}
