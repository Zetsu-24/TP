const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

document.getElementById("add-btn").addEventListener("click", function () {

  var paragraphs = [
    "Thank You for reaching up till here, The who has made this may not be worthy for the forgiveness but still Thank You for appericiating the efforts. Be Happy and Jolly like the girl in the picture, Shine like a bright star in the sky, live your life to the fullest and please don't get disheartened by his words, He is dumb and foolish and he sometimes loses his own objectivity so please try to forgive him he definitely doesn't mean anything wrong and has a good heart",
    "To, Little Miss Sunshine",
    "From, Someone you may not know but might get to know better with time"
  ];

  var para = document.createElement("p");

  var img = document.createElement("img");
  img.src = 'assets/editted image.jpg';

  paragraphs.forEach(function (content) {
    // Create a new paragraph element
    var paragraph = document.createElement("p");
    paragraph.textContent = content;

    // Append the paragraph to the dynamic-content div
    document.getElementById("dynamic-content").appendChild(paragraph);
  });
  document.getElementById("dynamic-content").appendChild(img);

})

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
