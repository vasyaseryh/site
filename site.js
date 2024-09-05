window.onload = () => {
  let elem = document.querySelector(".div_in_6_1");

  let arr = [
    "img/Rectangle 6.png",
    "img/Rectangle 8.png",
    "img/Rectangle 12.png",
    "img/Rectangle 13.png",
    "img/Rectangle 14.png",
  ];
  let div_with_6_div = document.querySelector(".div_with_6_div");
  for (let i = 0; i < 5; i++) {
    let clone = elem.cloneNode(true);
    clone.children[0].setAttribute("src", arr[i]);

    div_with_6_div.append(clone);
  }
};
