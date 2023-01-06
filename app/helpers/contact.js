export function contact(formId) {
  const $form = document.getElementById(formId);

  $form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const validationName = /[A-Za-zÑñÁáÉéÍíÓóÚú\s]+/,
      validateEmail = /[a-zA-Z0-9_.\$]+@[a-zA-Z]+\.\w+(\.[a-zA-Z]+)?/gi,
      validationMessage = /.{1,255}/;

    if (!validationName.test(formData.get("Name").trim())) {
      Swal.fire({
        icon: "error",
        title: "¡The name is not valid!",
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

    if (!validateEmail.test(formData.get("Email").trim())) {
      Swal.fire({
        icon: "error",
        title: "¡The email is not valid!",
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

    if (!validationMessage.test(formData.get("Message"))) {
      Swal.fire({
        icon: "error",
        title: "¡The message is not valid! It's too long",
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

    if (
      !formData.get("Name").trim() ||
      !formData.get("Email").trim() ||
      !formData.get("Message").trim()
    ) {
      Swal.fire({
        icon: "error",
        title: "¡You have to complete all the fields!",
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
