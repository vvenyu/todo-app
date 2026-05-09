export default function displayProjects(projectArray) {
  const container = document.querySelector('#project-list');
  container.replaceChildren();
  projectArray.forEach(element => {
    const projectTitle = document.createElement('button');
    projectTitle.textContent = element;
    container.appendChild(projectTitle);
  });
}

/* We've got an array with the default project
we have to show that defaut projet
If the user adds more projects
then we have to show them too */
/* Array.map so we show everything
if the user adds something more
then we purge the container and we run it again */