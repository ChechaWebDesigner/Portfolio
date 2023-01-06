export function BtnLinkSection(props) {
  const $aBtn = document.createElement("a"),
    { href, icon, text } = props;

  $aBtn.classList.add(
    "px-3",
    "py-1",
    "me-2",
    "btn",
    "btn-outline-primary",
    "fw-bold"
  );

  $aBtn.href = href;
  $aBtn.target = "_blank";
  $aBtn.innerHTML = `${icon} ${text}`;

  return $aBtn;
}
