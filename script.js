let circles = document.querySelectorAll(".circle");
const header = document.querySelector("header");
const logo = document.querySelector(".logo-auto");
const body = document.querySelector("body");

let dataCars = [
  {
    title: "2020 Audi S5 Coupe",
    price: "$19.99",
    cost_price: "$54.68",
    tickets: 5878,
    backGround: "./img/Rectangle 4.png",
  },
  {
    title: "2016 Ford Mustang GT",
    price: "$7.99",
    cost_price: "$9.68",
    tickets: 3290,
    backGround: "./img/Rectangle 3.png",
  },
  {
    title: "2020 Bugatti Chiron",
    price: "$0.99",
    cost_price: "$1.39",
    tickets: 4014,
    backGround: "./img/Rectangle 2.png",
  },
  {
    title: "2019 Porsche 911 Carrera",
    price: "$1.99",
    cost_price: "$2.99",
    tickets: 484,
    backGround: "./img/Rectangle 1.png",
  },
];
let cards = document.querySelector(".competitions-cards-content");
function dataCar(data, cards) {
  data.forEach((element) => {
    let card = createCard(element);
    cards.appendChild(card);
  });
}
function createCard(data) {
  let carCard = document.createElement("div");
  let carCardImg = document.createElement("div");
  let textContentCard = document.createElement("div");
  let titleCard = document.createElement("p");
  let carCardTitle = document.createElement("div");
  let carPrice = document.createElement("div");
  let carTickets = document.createElement("div");
  let carTicketsP = document.createElement("p");
  let spanTickets = document.createElement("span");
  let spanPrice = document.createElement("span");
  let spanCostPrice = document.createElement("span");
  let arrowCard = document.createElement("div");
  let arrow = "/img/Vector 1.png";
  addClass(
    carCard,
    carCardImg,
    textContentCard,
    carCardTitle,
    titleCard,
    carPrice,
    carTickets,
    spanPrice,
    spanCostPrice,
    arrowCard
  );

  carCard.appendChild(carCardImg);
  carCard.appendChild(textContentCard);
  textContentCard.appendChild(carCardTitle);
  textContentCard.appendChild(carPrice);
  textContentCard.appendChild(carTickets);
  carCardTitle.appendChild(titleCard);

  carPrice.appendChild(spanPrice);
  carPrice.appendChild(spanCostPrice);
  arrowCard.style.backgroundImage = `url('${arrow}')`;
  arrowCard.style.backgroundRepeat = "no-repeat";
  arrowCard.style.backgroundPosition = "center";
  arrowCard.style.position = "relative";
  arrowCard.style.bottom = "-3px";

  arrowCard.style.cursor = "pointer";
  carTickets.appendChild(carTicketsP);
  carTickets.appendChild(arrowCard);
  carTicketsP.appendChild(spanTickets);

  window.onload = arrowCard.addEventListener("click", () => {
    alert("heelo");
  });
  carCard.style.backgroundImage = `url('${data.backGround}')`;
  carCard.style.backgroundRepeat = "no-repeat";
  carCard.style.backgroundPosition - "canter";

  titleCard.textContent = data.title;
  spanPrice.textContent = data.price;
  spanCostPrice.textContent = data.cost_price;
  spanTickets.textContent = `${data.tickets} tickets remaining`;

  return carCard;
}
function addClass(
  carCard,
  carCardImg,
  textContentCard,
  carCardTitle,
  titleCard,
  carPrice,
  carTickets,
  spanPrice,
  spanCostPrice,
  arrowCard
) {
  arrowCard.classList.add("arrow");
  carCard.classList.add("car-card");
  carCardImg.classList.add("car-card-img");
  textContentCard.classList.add("text-content-card");
  carCardTitle.classList.add("car-card-title");
  titleCard.classList.add("title-card");
  carPrice.classList.add("car-price");
  carTickets.classList.add("car-tickets");
  spanPrice.classList.add("price");
  spanCostPrice.classList.add("cost-price");
}
dataCar(dataCars, cards);

let sliderImg = document.querySelector(".slider-content-image");
window.onload = () => {
  circles.forEach((element, index) => {
    element.addEventListener("click", () => {
      circles.forEach((circle) => {
        circle.classList.remove("circle-1");
      });
      element.classList.add("circle-1");

      if (index === 0) {
        sliderImg.style.backgroundPosition = "center";
        sliderImg.style.backgroundImage = "url('./img/Rectangle 7.png')";
        sliderImg.style.transition = "0.3s all";
      } else if (index === 1) {
        sliderImg.style.backgroundPosition = "center";
        sliderImg.style.backgroundImage = "url('./img/car1.jpg')";
        sliderImg.style.transition = "0.3s all";
      } else if (index === 2) {
        sliderImg.style.backgroundPosition = "center";
        sliderImg.style.backgroundImage = "url('./img/car2.jpg')";
        sliderImg.style.transition = "0.3s all";
      } else if (index === 3) {
        sliderImg.style.backgroundPosition = "center";
        sliderImg.style.backgroundImage = "url('./img/car3.jpg')";
        sliderImg.style.transition = "0.3s all";
      } else if (index === 4) {
        sliderImg.style.backgroundPosition = "center";
        sliderImg.style.backgroundImage = "url('./img/car4.jpg')";
        sliderImg.style.transition = "0.3s all";
      }
    });

    if (index === 0) {
      element.classList.add("circle-1");
      sliderImg.style.backgroundImage = "url(./img/Rectangle 7.png')";
    }
  });
};

const burgerBtn = document.querySelector(".burger-btn");
const burger = document.querySelector(".burger");
let burgerBtnClicked = false;
burgerBtn.addEventListener("click", () => {
  if (!burgerBtnClicked) {
    logo.style.justifyContent = "center";

    burgerBtnClicked = true;
  } else {
    logo.style.justifyContent = "left";
    logo.style.display = "flex";
    body.style.backgroundColor = "transparent";
    burgerBtnClicked = false;
  }
});
