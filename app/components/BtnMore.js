export function BtnMore(props) {
  const $btn = document.createElement("button"),
    { id, text } = props;

  $btn.classList.add(
    "btn-more",
    "d-block",
    "px-3",
    "py-1",
    "mt-3",
    "mb-3",
    "mx-auto",
    "btn",
    "btn-outline-primary",
    "fs-4",
    "fw-bold"
  );

  $btn.id = id || "";
  $btn.innerHTML = text;

  return $btn;
}
