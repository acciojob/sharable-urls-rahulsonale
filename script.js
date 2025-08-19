document.addEventListener("DOMContentLoaded", () => {
  let inp1 = document.querySelector("#name");
  let inp2 = document.querySelector("#year");
  let h3 = document.querySelector("#url");
  let submit = document.querySelector("#button");

  submit.addEventListener("click", function (e) {
    e.preventDefault();

    let params = [];
    if (inp1.value) params.push(`name=${inp1.value}`);
    if (inp2.value) params.push(`year=${inp2.value}`);

    let url = "https://localhost:8080/";
    if (params.length > 0) {
      url += "?" + params.join("&");
    }

    h3.textContent = url;
  });
});
