import { reduceArr } from "../helpers/reduceArr.js";
import { skills } from "./../assets/data/data-skill.js";
import { BtnMore } from "./BtnMore.js";
import { CardSkill } from "./CardSkill.js";
import { TemporalMessage } from "./TemporalMessage.js";

export function Skills() {
  const d = document,
    $container = d.createElement("section"),
    $skills = d.createElement("article"),
    $btnMore = BtnMore({ id: "btn-more-skills", text: "More..." });

  let limitInf = 0,
    limitSup = 5;

  $container.classList.add("container", "p-2");
  $skills.classList.add(
    "container-skills",
    "position-relative",
    "d-flex",
    "justify-content-evenly",
    "align-items-center",
    "flex-wrap"
  );

  reduceArr({ limitInf, limitSup, arr: skills }).forEach((element) => {
    $skills.appendChild(CardSkill({ element }));
  });

  $container.appendChild($skills);
  $container.appendChild($btnMore);

  d.addEventListener("click", (e) => {
    if (!e.target.matches("#btn-more-skills")) return;

    limitInf += 5;
    limitSup += 5;
    const arr = reduceArr({ limitInf, limitSup, arr: skills });
    const $fragment = d.createDocumentFragment();
    let $msg;

    if (arr.length <= 5) {
      $msg = TemporalMessage({
        id: "msg-skills",
        text: "All skills have been loaded.",
      });
      $btnMore.insertAdjacentElement("afterend", $msg);
      $container.removeChild($btnMore);
      setTimeout(() => {
        $container.removeChild($msg);
      }, 3500);
    }

    arr.forEach((element) => $fragment.appendChild(CardSkill({ element })));
    $skills.appendChild($fragment);
  });

  return $container;
}
