let midleElement = document.getElementById("middleSection");
let humburger = document.getElementById("humburger");
let links = document.getElementById("links");

humburger.addEventListener("click", () => {
  console.log(links.style.display);
  if (links.style.display == "flex") {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
});

function addDummyImg(num) {
  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.className = "midImg";
    midleElement.append(div);
  }
}
addDummyImg(8);
