import { logProjectName } from "./constructor.js";


export default function openProjectInput() {
  logProjectName('Default')
  const projectBtn = document.querySelector('#open-project-input');
  const projectForm = document.querySelector('#project-form');
  const input = document.querySelector('#project-name');

  const saveBtn = document.querySelector('#save-project-name');
  const discardBtn = document.querySelector('#discard-project-name');
  projectBtn.addEventListener('click', () => {
    projectForm.classList.toggle('hidden');
    if(!projectForm.classList.contains('hidden')) {
      input.focus();
    }
  })

  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const projectName = input.value;
    projectForm.reset();
    projectForm.classList.add('hidden');

    logProjectName(projectName);
  })
}
