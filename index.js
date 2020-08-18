const tabs = document.querySelectorAll(".item");

tabs.forEach((item) => {
  let btn = item.querySelector("button");
  let target = item.nextElementSibling;

  btn.onclick = () => {
    const otherTabs = [...tabs].filter((tab) => tab !== item);
    otherTabs.forEach((x) => {
      let outerBtn = x.querySelector("button");
      let outerTarget = x.nextElementSibling;

      outerBtn.setAttribute("aria-expanded", false);
      outerTarget.hidden = true;
    });
    let expanded = btn.getAttribute("aria-expanded") === "true" || false;
    btn.setAttribute("aria-expanded", !expanded);
    target.hidden = expanded;

    if (target.hidden === true) {
      item.style.borderBottom = "1px solid black";
    } else {
      item.style.border = "none";
    }
  };
});
