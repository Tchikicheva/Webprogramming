const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const closedText = document.querySelector('.closed-text');
const openText = document.querySelector('.open-text');

// Function to toggle visibility
const toggleVisibility = (addActiveElem, removeActiveElem) => {
  addActiveElem.classList.add('active');
  removeActiveElem.classList.remove('active');
};

// Add event listener for closedFace
closedFace.addEventListener('click', () => {
  toggleVisibility(openFace, closedFace);
  toggleVisibility(openText, closedText);
});

// Add event listener for openFace
openFace.addEventListener('click', () => {
  toggleVisibility(closedFace, openFace);
  toggleVisibility(closedText, openText);
});
