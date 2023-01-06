export function TemporalMessage(props) {
  const $message = document.createElement("p"),
  {id, text} = props;

  $message.classList.add("text-center", "fs-4", "text-primary", "my-2");
  $message.innerHTML = text;
  $message.id = id ?? "";

  return $message;
}