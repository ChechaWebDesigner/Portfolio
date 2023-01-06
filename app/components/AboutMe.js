import { TitleSection } from "./TitleSection.js";

export function AboutMe(props) {
  const d = document,
    $container = d.createElement("section"),
    $row = d.createElement("div"),
    $firstRow = d.createElement("div"),
    $secondRow = d.createElement("div"),
    { description, imgSource } = props;

  $container.classList.add(
    "container",
    "border-bottom",
    "border-primary",
    "rounded-bottom",
    "shadow-sm",
    "my-2",
    "pb-1"
  );
  $row.classList.add("row", "row-cols-12", "mx-0");
  $firstRow.classList.add(
    "col-12",
    "col-md-7",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "flex-column"
  );
  $secondRow.classList.add(
    "col-12",
    "col-md-5",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "position-relative"
  );

  $firstRow.appendChild(
    TitleSection({
      id: "about-me",
      text: "About Me",
    })
  );
  $firstRow.innerHTML += `
    <h2 class="fs-2 fw-bold text-title-name">Hi! I'm <span class="my-name"></span></h2>
    <p class="fs-5 fw-semibold text-justify dark-color-white">${description}</p>
  `;
  $secondRow.innerHTML = `
    <div class="text-center my-picture">
      <img src="${imgSource}" alt="Me" class="w-50 position-relative rounded-circle">
    </div>
  `;
  $row.appendChild($firstRow);
  $row.appendChild($secondRow);
  $container.appendChild($row);

  return $container;
}
