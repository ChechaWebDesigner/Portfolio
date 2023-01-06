import { reduceArr } from "../helpers/reduceArr.js";
import { BtnMore } from "./BtnMore.js";
import {projects} from "./../assets/data/data-projects.js"
import { CardProject } from "./CardProject.js";
import { TemporalMessage } from "./TemporalMessage.js";

export function Projects() {
  const d = document,
    $container = d.createElement("section"),
    $projects = d.createElement("article"),
    $btnMore = BtnMore({ id: "btn-more-projects", text: "More..." });
  
    let limitInf = 0,
    limitSup = 5;

  $container.classList.add("container", "p-2");
  $projects.classList.add(
    "container-projects",
    "position-relative",
    "d-flex",
    "justify-content-evenly",
    "align-items-center",
    "flex-wrap"
  );
    
  reduceArr({ limitInf, limitSup, arr: projects }).forEach((element) => {
    $projects.appendChild(CardProject({ element }));
  });

  $container.appendChild($projects);
  $container.appendChild($btnMore);

  d.addEventListener("click", (e) => {
    if (!e.target.matches("#btn-more-projects")) return;

    limitInf += 5;
    limitSup += 5;
    const arr = reduceArr({ limitInf, limitSup, arr: projects });
    const $fragment = d.createDocumentFragment();
    let $msg;

    if (arr.length <= 5) {
      $msg = TemporalMessage({
        id: "msg-projects",
        text: "All projects have been loaded.",
      });
      $btnMore.insertAdjacentElement("afterend", $msg);
      $container.removeChild($btnMore);
      setTimeout(() => {
        $container.removeChild($msg);
      }, 3500);
    }
    
    arr.forEach((element) => $fragment.appendChild(CardProject({ element })));
    $projects.appendChild($fragment);
  });

  return $container;
}
