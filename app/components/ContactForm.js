export function ContactForm(props) {
  const $container = document.createElement("section"),
    $form = document.createElement("form"),
    { action, method, name, id } = props;

  $container.classList.add(
    "contact",
    "p-4",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "title-item",
    "mt-2",
    "rounded-top"
  );
  $container.id = "contact";

  $form.id = id || "";
  $form.action = action || "#";
  $form.name = name || "";
  $form.method = method || "POST";
  $form.classList.add("w-75");

  $form.innerHTML = `
  <div class="container">

    <div class="row">
      <div class="col-12">
          <h2 class="text-center fw-bold fs-1 text-white text-uppercase">Contact <i class="fa-solid fa-envelope"></i></h2>
      </div>
    </div>

    <div class="row mt-4 container-data-personal">
    
      <div class="col-12 col-md-6 container-txtInput">
          <div class="container-input w-100 position-relative">
              <input type="text" required="" name="Name" class="txt-element" autocomplete="off">
              <label>
                  <span style="transition-delay:0ms">N</span><span
                      style="transition-delay:50ms">a</span><span
                      style="transition-delay:100ms">m</span><span
                      style="transition-delay:150ms">e</span>
              </label>
          </div>
      </div>

      <div class="col-12 col-md-6 container-txtInput">
          <div class="container-input w-100 position-relative">
              <input type="email" required="" name="Email" class="txt-element" autocomplete="off">
              <label>
                  <span style="transition-delay:0ms">E</span><span
                      style="transition-delay:50ms">m</span><span
                      style="transition-delay:100ms">a</span><span
                      style="transition-delay:150ms">i</span><span
                      style="transition-delay:200ms">l</span>
              </label>
          </div>
      </div>

    </div>

    <div class="row mt-5">

      <div class="col-12">
          <div class="container-input w-100 position-relative">
              <textarea required="" name="Message" class="txt-element" maxlength="100"></textarea>
              <label>
                  <span style="transition-delay:0ms">M</span><span
                      style="transition-delay:50ms">e</span><span
                      style="transition-delay:100ms">s</span><span
                      style="transition-delay:150ms">s</span><span
                      style="transition-delay:200ms">a</span><span
                      style="transition-delay:250ms">g</span><span
                      style="transition-delay:300ms">e</span>
              </label>
          </div>
      </div>

    </div>

    <div class="row mt-5">
        <div class="col-12 text-center">
            <button type="submit" class="btn btn-outline-primary text-white py-2 fs-5 fw-semibold w-100"
                id="btn-submit">Submit</button>
        </div>
    </div>

  </div>
  `;

  $container.appendChild($form);

  return $container;
}
