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

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const message = document.getElementById("message");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // Create game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // Check for matches

  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      message.innerText = "You have selected the same image!";
    } else if (cardsChosen[0] === cardsChosen[1]) {
      message.innerText = "You found a match!";
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      message.innerText = "Cards did not match!";
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  // Flip card function

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
