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
var savedCoverSection = document.querySelector(".saved-covers-section")

var currentCover;

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

  currentCover = new Cover(currentCoverImage.src, currentTitle.innerText, word1, word2)

};

//ITERATION 2:
makeYourOwnCoverButton.addEventListener("click", makeNewPage);
function makeNewPage() {
  homeView.classList.add("hidden")
  formView.classList.remove("hidden")
  viewSavedButton.classList.add("hidden")
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
//ITERATION 4 STUFF:
  miniBook()
};
function miniBook() {
  savedCoverSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoverSection.innerHTML += `
      <section class="mini-cover cover-${[i]}">
        <img class="mini-cover" id= "${savedCovers[i].id}" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="overlay" src="./assets/overlay.png">
      </section>
      `
  }
}
viewHomeButton.addEventListener("click", viewHomePage);
function viewHomePage() {
  homeView.classList.remove("hidden")
  formView.classList.add("hidden")
  savedView.classList.add("hidden")
  viewSavedButton.classList.remove("hidden")
  saveCoverButton.classList.remove("hidden")
  showNewRandomCoverButton.classList.remove("hidden")
  viewHomeButton.classList.add("hidden")
}

// ITERATION 3
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
  viewHomePage()
  covers.push(formNewCoverImage.value)
  titles.push(formNewTitleText.value)
  descriptors.push(formNewFirstDescriptorText.value, formNewSecondDescriptorText.value)

  currentCover = new Cover(formNewCoverImage.value, formNewTitleText.value, formNewFirstDescriptorText.value, formNewSecondDescriptorText.value)
  savedCovers.push(currentCover)

  currentCoverImage.src = covers[covers.length - 1];
  currentTitle.innerText = titles[titles.length - 1];
  word1 = descriptors[descriptors.length - 2]
  word2 = descriptors[descriptors.length - 1]
  currentDescriptors.innerText = "A tale of " + word1 + " and " + word2;

  //OPTIONAL STRETCH GOAL
  //   //if (!formNewCoverImage || !formNewTitleText || !formNewFirstDescriptorText || !formNewSecondDescriptorText) {
  //   //  window.alert("You need to fill out all the forms");
  //   //} else {
  // }

}

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
};

// ITERATION 4
saveCoverButton.addEventListener("click", saveCover);
function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
};
  // var isDuplicate = false;
  // for (var i = 0; i < savedCovers.length; i++) {
  //   if (savedCovers[i].title === currentCover.title && savedCovers[i].cover === currentCover.cover && savedCovers[i].tagline1 === currentCover.tagline1 && savedCovers[i].tagline2 === currentCover.tagline2) {
  //       console.log("You cannot save duplicate book covers. Confused on how this application works? Check out the Read Me!")
  //       isDuplicate = true;
  //     }
  //   }
  // if (!isDuplicate) {
  //     savedCovers.push(currentCover)
  //   }

// ITERATION 5
savedCoverSection.addEventListener("dblclick", removeCover);
function removeCover() {
  console.log("message")
  for (var i = 0; i < savedCovers.length; i++) {
    if (`${savedCovers[i].id}` === event.target.id) {
      savedCovers.splice(i, 1)
    }
  viewSavedPage()
  }
}

///We never ended up using this variable below, why is it here?

// Add your event listeners here 👇 (*********ADD FALSE IF IT DOESN'T WORK)

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }


// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
