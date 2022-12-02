export default function contact(formId, btnId) {
  const $form = document.getElementById(formId);

  $form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const validateEmail = /[a-zA-Z0-9_.\$]+@[a-zA-Z]+\.\w+(\.[a-zA-Z]+)?/gi;

    if (!validateEmail.test(formData.get("Email").trim())) {
      Swal.fire({
        icon: "error",
        title: "¡The email is not valid!",
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

    const response = await fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
        accept: "application/json",
      },
    });

    if (response.ok) {
      this.reset();
      Swal.fire({
        icon: "success",
        title: "¡Submitted form!",
        text: "Thanks for contacting me. I'll answer you in a few of seconds.",
        timer: 4000,
        timerProgressBar: true,
      });
    }
  });
}
