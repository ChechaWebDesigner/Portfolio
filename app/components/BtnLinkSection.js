export function BtnLinkSection(props) {
  const $aBtn = document.createElement("a"),
    { href, icon, target = "", text } = props;

  $aBtn.classList.add(
    "px-3",
    "py-1",
    "me-2",
    "btn",
    "btn-outline-primary",
    "fw-bold"
  );

  $aBtn.href = href;
  $aBtn.target = target;
  $aBtn.innerHTML = `${icon} ${text}`;

  return $aBtn;
}
