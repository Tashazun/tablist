
const tabs = document.querySelectorAll(".item");

tabs.forEach((item) => {
  item.addEventListener("click", (event) => {
    let nextSibling = item.nextElementSibling;
    if (nextSibling.classList.contains("hidden")) {
      nextSibling.classList.remove("hidden");
      item.style.border = "none";
    } else {
      nextSibling.classList.add("hidden");
      item.style.borderBottom = "1px solid black";
    }
  });
});
