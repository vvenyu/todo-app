import displayProjects from "./domHandler.js";

class Todo {
  constructor(title, description, date, priority, checklist) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.checklist = checklist;
  }
}

const projectArray = [];

export function logProjectName(name) {
  projectArray.push(name);
  console.log(projectArray);
  displayProjects(projectArray)
}