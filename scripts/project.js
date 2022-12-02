AOS.init({
  duration: 1000,
  once: true,
});

export default function createProjects(container, infoProjects) {
  const containerProject = document.querySelector(container),
    fragmentProject = document.createDocumentFragment();

  infoProjects.forEach((element) => {
    const project = document.createElement("div");
    project.classList.add(
      "project",
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "flex-column",
      "p-4",
      "rounded",
      "shadow",
      "mx-4",
      "my-2",
      "w-30",
      "h-100",
      "text-center"
    );

    project.setAttribute("data-aos", "zoom-in");
    project.style.backgroundImage = `url(${element.img})`;

    const nameProject = document.createElement("h3");
    nameProject.classList.add("element-into-project");
    nameProject.textContent = element.name;

    const descriptionProject = document.createElement("p");
    descriptionProject.classList.add("element-into-project");
    descriptionProject.textContent = element.description;

    const technologies = document.createElement("p");
    technologies.classList.add("element-into-project");
    technologies.innerHTML = `<span class="d-block fw-bold fs-5">Technologies</span> ${element.technologies.join(
      ", "
    )}`;

    const linkProject = document.createElement("a");
    linkProject.classList.add(
      "element-into-project",
      "btn",
      "btn-primary",
      "px-4",
      "py-2"
    );
    linkProject.href = element.link;
    linkProject.textContent = "View";
    linkProject.target = "_blank";

    project.appendChild(nameProject);
    project.appendChild(descriptionProject);
    project.appendChild(technologies);
    project.appendChild(linkProject);

    fragmentProject.appendChild(project);
  });

  containerProject.appendChild(fragmentProject);
}
