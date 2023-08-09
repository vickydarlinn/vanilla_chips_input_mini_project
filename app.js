const inputEl = document.querySelector(".input_btn");
const outputEl = document.querySelector(".output");
const closeEl = document.querySelectorAll(".close");
const chips = [];
inputEl.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    chips.push(e.target.value);

    console.log(chips);
    showChip();
    inputEl.value = "";
  }
});

function showChip() {
  let html = "";

  for (let i = 0; i < chips.length; i++) {
    html =
      html +
      ` <div class="item"><span>${chips[i]}</span> <span class="close">X</span></div>`;
  }
  outputEl.innerHTML = html;
}
for (let i = 0; i < closeEl.length; i++) {
  closeEl[i].addEventListener("click", function (e) {
    console.log(e);
    console.log("clicked");
  });
}
