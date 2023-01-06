export function TitleSection(props) {
  const $title = document.createElement("h2"),
    { id, text } = props;

  $title.classList.add(
    "fs-1",
    "fw-bold",
    "w-100",
    "text-center",
    "p-3",
    "text-uppercase",
    "title-item"
  );
  $title.id = id;
  $title.innerHTML = text;

  return $title;
}
