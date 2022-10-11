// Information
import { skills } from "./../Data/data-skill.js";
import { softSkills } from "./../Data/data-soft-skill.js";
import { projects } from "./../Data/data-projects.js";
// Functions
import writeEffect from "./writing.js";
import createSkills from "./skill.js";
import createSoftSkills from "./soft-skill.js";
import createProjects from "./project.js";
import contact from "./contact.js";

document.addEventListener("DOMContentLoaded", (e) => {
  writeEffect(".my-name");
  createSkills(".container-skills", skills);
  createSoftSkills(".container-soft-skills", softSkills);
  createProjects(".container-projects", projects);
  contact("frm-contact", "btn-submit");
});
