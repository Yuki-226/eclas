"use strict";
{
  const show = document.getElementById("show");
  const hide = document.getElementById("hide");

  show.addEventListener("click", () => {
    document.body.className = "menu-open";
  });

  hide.addEventListener("click", () => {
    document.body.className = "";
  });
}
