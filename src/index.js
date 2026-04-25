import openProjectInput from './project.js';
import displayProjects from './domHandler.js';
import './styles.css';
class Todo {
  constructor(title, description, date, priority, checklist) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.checklist = checklist;
  }
}

export const projectArray = [];

export function logProjectName(name) {
  projectArray.push(name);
}

openProjectInput();
displayProjects();
