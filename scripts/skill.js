export default function createSkills(container, infoSkills) {
  const containerSkills = document.querySelector(container),
    fragmentSkill = document.createDocumentFragment();

  let speed = 45;

  infoSkills.forEach((element) => {
    const containerSkill = document.createElement("div");
    containerSkill.classList.add(
      "container-skill",
      "rounded",
      "shadow",
      "position-relative",
      "mx-4",
      "my-2"
    );

    /* front Skill */

    const frontSkill = document.createElement("div");
    frontSkill.classList.add("front-skill", "p-4");

    const nameSkill = document.createElement("h3");
    nameSkill.classList.add("text-center", "fs-3", "dark-color-white");
    nameSkill.textContent = element.name;

    const progress = document.createElement("div");
    progress.classList.add(
      "circular-progress",
      "position-relative",
      "rounded-circle",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );

    const valueContainer = document.createElement("div");
    valueContainer.classList.add(
      "value-container",
      "position-relative",
      "fs-5",
      "text-center",
      "fw-bold"
    );
    valueContainer.innerHTML = `${element.nivelName}`;

    let progressValue = 0;
    let progressEndValue = element.nivel;

    let progressSkill = setInterval(() => {
      progressValue++;
      progress.style.background = `conic-gradient(#041562 ${
        progressValue * 3.6
      }deg, #A6D1E6 ${progressValue * 3.6}deg)`;
      if (progressValue === progressEndValue) {
        clearInterval(progressSkill);
      }
    }, speed);

    progress.appendChild(valueContainer);
    frontSkill.appendChild(nameSkill);
    frontSkill.appendChild(progress);

    /* Back Skill */
    const backSkill = document.createElement("div");
    backSkill.classList.add(
      "back-skill",
      "position-absolute",
      "p-4",
      "m-auto",
      "w-100",
      "h-100",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );

    const imgSkill = document.createElement("img");
    imgSkill.src = element.img;
    imgSkill.classList.add("w-75");

    backSkill.appendChild(imgSkill);

    containerSkill.appendChild(frontSkill);
    containerSkill.appendChild(backSkill);

    fragmentSkill.append(containerSkill);
  });

  containerSkills.appendChild(fragmentSkill);
}
