// your code here
let inp1 = document.querySelector("#name");
let inp2 = document.querySelector("#year");
let h3 = document.querySelector("#url");
let submit = document.querySelector("#button");

submit.addEventListener("click", function (e) {
    e.preventDefault();
  h3.textContent = `https://localhost:8080/${inp1.value}&${inp2.value}`;
});
