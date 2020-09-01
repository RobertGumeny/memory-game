document.addEventListener("DOMContentLoaded", () => {
  // Options go here

  const cardArray = [
    {
      name: "Cheese",
      img: "images/cheese-wedge.png",
    },
    {
      name: "Cheese",
      img: "images/cheese-wedge.png",
    },
    {
      name: "Carrot",
      img: "images/carrot.png",
    },
    {
      name: "Carrot",
      img: "images/carrot.png",
    },
    {
      name: "Chili",
      img: "images/chili-pepper.png",
    },
    {
      name: "Chili",
      img: "images/chili-pepper.png",
    },
    {
      name: "Apple",
      img: "images/shiny-apple.png",
    },
    {
      name: "Apple",
      img: "images/shiny-apple.png",
    },
    {
      name: "Grapes",
      img: "images/grapes.png",
    },
    {
      name: "Grapes",
      img: "images/grapes.png",
    },
    {
      name: "Bread",
      img: "images/sliced-bread.png",
    },
    {
      name: "Bread",
      img: "images/sliced-bread.png",
    },
  ];

  const grid = document.querySelector(".grid");

  // Create game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      // card.addEventListener('click', flipcard);
      grid.appendChild(card);
    }
  }

  createBoard();
});
