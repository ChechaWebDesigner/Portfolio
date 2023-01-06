import { softSkills } from "./../assets/data/data-soft-skill.js";
import { CardSoftSkill } from "./CardSoftSkill.js";

export function SoftSkills() {
  const d = document,
    $softSkills = d.createElement("section");

  $softSkills.classList.add(
    "container-soft-skills",
    "container",
    "position-relative",
    "d-flex",
    "justify-content-evenly",
    "align-items-center",
    "flex-wrap",
    "p-2"
  );

  softSkills.forEach((element) =>
    $softSkills.appendChild(CardSoftSkill({ element }))
  );

  return $softSkills;
}
