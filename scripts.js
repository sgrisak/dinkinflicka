let count = 0;
const buy = document.getElementById("increment");
const reset = document.getElementById("reset");
const textHolder = document.getElementById("count");
const cart = document.getElementsByClassName("basket")[0];
buy.addEventListener("click", function () {
  if (count < 10) {
    textHolder.innerHTML = ++count;
    cart.classList.add("shoppingCart__dip");
    setTimeout(() => {
      cart.classList.remove("shoppingCart__dip");
    }, 250);
    textHolder.classList.add("numberDip");
    if (count > 0) {
      textHolder.classList.add("bloom", "showMe");
      setTimeout(() => {
        textHolder.classList.remove("numberDip");
      }, 100);
    } else {
      ("");
    }
  } else {
    alert("Max limit reached");
  }
});

reset.addEventListener("click", function () {
  count = 0;
  textHolder.innerHTML = null;
  // textHolder.classList.add('poof');
  textHolder.classList.remove("bloom", "showMe");
});
