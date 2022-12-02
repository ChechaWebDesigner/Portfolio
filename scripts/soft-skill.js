export default function createSoftSkills(container, infoSoftSkills) {
  const containerSoftSkills = document.querySelector(container),
    fragmentSoftSkills = document.createDocumentFragment();

  infoSoftSkills.forEach((element) => {
    const softSkill = document.createElement("div");
    softSkill.classList.add(
      "soft-skill",
      "rounded",
      "p-4",
      "shadow",
      "m-3",
      "w-25"
    );

    const nameSkill = document.createElement("h3");
    nameSkill.classList.add("fs-5", "fw-semibold", "text-center", "dark-color-white");
    nameSkill.textContent = element.name;

    const imgSoftSkillContainer = document.createElement("div");
    imgSoftSkillContainer.classList.add(
      "img-soft-skill",
      "w-100",
      "text-center"
    );

    const imgSoftSkill = document.createElement("img");
    imgSoftSkill.classList.add("w-50");
    imgSoftSkill.src = element.img;

    imgSoftSkillContainer.appendChild(imgSoftSkill);
    softSkill.appendChild(nameSkill);
    softSkill.appendChild(imgSoftSkillContainer);

    fragmentSoftSkills.appendChild(softSkill);
  });

  containerSoftSkills.appendChild(fragmentSoftSkills);
}
