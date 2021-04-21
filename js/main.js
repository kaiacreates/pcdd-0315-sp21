for (var items = document.querySelectorAll(".item"), i = 0; i < items.length; i++)
  if (items[i].hasAttribute("data-color")) {
    var color = items[i].getAttribute("data-color");
    items[i].style.backgroundColor = "#" + color
  }