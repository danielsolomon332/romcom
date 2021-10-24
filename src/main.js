var currentCoverImage = document.querySelector(".cover-image");
var currentTitle = document.querySelector(".cover-title");
var currentDescriptors = document.querySelector(".tagline");
var currentDescriptor1 = document.querySelector(".tagline-1");
var currentDescriptor2 = document.querySelector(".tagline-2");
var showNewRandomCoverButton = document.querySelector(".random-cover-button");
var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var viewHomeButton = document.querySelector(".home-button");
var homeView = document.querySelector(".home-view")
var formView = document.querySelector(".form-view")
var savedView = document.querySelector(".saved-view")

var tempBook;

// ITERATION 0: This code randomizes book on home page load, currently turned off to troubleshoot iteration 3:

window.addEventListener("load", changeCover);

// ITERATION 1:
showNewRandomCoverButton.addEventListener("click", changeCover);
function changeCover() {

  currentCoverImage.src = covers[Math.floor(Math.random() * covers.length)];
  currentTitle.innerText = titles[Math.floor(Math.random() * titles.length)];
  word1 = descriptors[Math.floor(Math.random() * descriptors.length)]
  word2 = descriptors[Math.floor(Math.random() * descriptors.length)]
  currentDescriptors.innerText = "A tale of " + word1 + " and " + word2;

  tempBook = new Cover(currentCoverImage.src, currentTitle.innerText, word1, word2)

};

//ITERATION 2:
makeYourOwnCoverButton.addEventListener("click", makeNewPage);
function makeNewPage() {
  homeView.classList.add("hidden")
  formView.classList.remove("hidden")
  viewSavedButton.classList.add("hidden")
  makeYourOwnCoverButton.classList.remove("hidden")
  viewHomeButton.classList.remove("hidden")
  saveCoverButton.classList.add("hidden")
  showNewRandomCoverButton.classList.add("hidden")
};

viewSavedButton.addEventListener("click", viewSavedPage);
function viewSavedPage() {
  homeView.classList.add("hidden")
  formView.classList.add("hidden")
  savedView.classList.remove("hidden")
  saveCoverButton.classList.add("hidden")
  showNewRandomCoverButton.classList.add("hidden")
  viewHomeButton.classList.remove("hidden")
};

viewHomeButton.addEventListener("click", viewHomePage);
function viewHomePage() {
  homeView.classList.remove("hidden")
  formView.classList.add("hidden")
  savedView.classList.add("hidden")
  saveCoverButton.classList.remove("hidden")
  showNewRandomCoverButton.classList.remove("hidden")
  viewHomeButton.classList.add("hidden")
}

// Iteration 3
var formNewCoverImage = document.querySelector(".user-cover");
var formNewTitleText = document.querySelector(".user-title");
var formNewFirstDescriptorText = document.querySelector(".user-desc1");
var formNewSecondDescriptorText = document.querySelector(".user-desc2");
var formMakeBookButton = document.querySelector(".create-new-book-button");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

formMakeBookButton.addEventListener("click", createFormMakeBook);
function createFormMakeBook() {
  event.preventDefault()

  covers.push(formNewCoverImage.value)
  titles.push(formNewTitleText.value)
  descriptors.push(formNewFirstDescriptorText.value, formNewSecondDescriptorText.value)

  tempBook = new Cover(formNewCoverImage.value, formNewTitleText.value, formNewFirstDescriptorText.value, formNewSecondDescriptorText.value)
  savedCovers.push(tempBook)

  currentCoverImage.src = covers[covers.length - 1];
  currentTitle.innerText = titles[titles.length - 1];
  word1 = descriptors[descriptors.length - 2]
  word2 = descriptors[descriptors.length - 1]
  currentDescriptors.innerText = "A tale of " + word1 + " and " + word2;

  viewHomePage()

}

// ITERATION 4
saveCoverButton.addEventListener("click", saveCover);
function saveCover() {
  savedCovers.push(tempBook)
}

//   //if (!formNewCoverImage || !formNewTitleText || !formNewFirstDescriptorText || !formNewSecondDescriptorText) {
//   //  window.alert("You need to fill out all the forms");
//   //} else {
// }

var currentCover;

// Add your event listeners here 👇 (*********ADD FALSE IF IT DOESN'T WORK)

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }


// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
