// Flashcards Array to store the data
let flashcards = [];

// DOM elements
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const flipBtn = document.getElementById('flip-btn');
const deleteBtn = document.getElementById('delete-btn');
const newQuestionInput = document.getElementById('new-question');
const newAnswerInput = document.getElementById('new-answer');
const addCardBtn = document.getElementById('add-card-btn');
const cardList = document.getElementById('card-list-items');
const flashcardEl = document.getElementById('flashcard');

// Current card index
let currentCardIndex = 0;

// Function to update the flashcard display
function updateFlashcard() {
  if (flashcards.length > 0) {
    const currentCard = flashcards[currentCardIndex];
    questionEl.textContent = currentCard.question;
    answerEl.textContent = currentCard.answer;
    answerEl.classList.add('hidden');
    deleteBtn.classList.add('hidden');
    flashcardEl.classList.remove('flip');
  }
}

// Flip card to show the answer
flipBtn.addEventListener('click', () => {
  answerEl.classList.toggle('hidden');
  answerEl.classList.toggle('visible');
  deleteBtn.classList.toggle('hidden');
  flashcardEl.classList.toggle('flip');
});

// Add a new flashcard to the array
addCardBtn.addEventListener('click', () => {
  const question = newQuestionInput.value;
  const answer = newAnswerInput.value;

  if (question && answer) {
    flashcards.push({ question, answer });
    newQuestionInput.value = '';
    newAnswerInput.value = '';
    updateFlashcard();
    renderCardList();
  }
});

// Delete the current flashcard
deleteBtn.addEventListener('click', () => {
  flashcards.splice(currentCardIndex, 1);
  if (currentCardIndex >= flashcards.length) {
    currentCardIndex = flashcards.length - 1;
  }
  updateFlashcard();
  renderCardList();
});

// Render the list of flashcards
function renderCardList() {
  cardList.innerHTML = '';
  flashcards.forEach((card, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = card.question;
    listItem.addEventListener('click', () => {
      currentCardIndex = index;
      updateFlashcard();
    });
    cardList.appendChild(listItem);
  });
}

// Initialize the flashcard display
updateFlashcard();
