keyName = document.querySelector(".keyName");
keyCode = document.querySelector(".keyCode");

addEventListener("keyup", (e) => {
  keyCode.style.display = "block";

  keyName.innerHTML = `You pressed  <span style="color: green">${e.key}</span>`;
  keyCode.innerHTML = e.keyCode;
  console.log(e);
});
