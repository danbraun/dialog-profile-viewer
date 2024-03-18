const dialog = document.querySelector("dialog")
const openModalButtons = document.querySelectorAll(".showModal")
const allModalCards = document.querySelectorAll("dialog .card")
let numOfCards = 0
let currentCard = 1

openModalButtons.forEach( (button) => {
  numOfCards++
  button.addEventListener("click", (e) => {
    const openID = e.target.dataset.open
    const modalCardVisible = dialog.querySelector(`[data-card="${openID}"]`)
    modalCardVisible.setAttribute("aria-hidden", false);
    currentCard = openID
    dialog.showModal()
  })
})

const nextButtons = document.querySelectorAll('.next')
const prevButtons = document.querySelectorAll('.prev')


nextButtons.forEach( (button) => {
  button.addEventListener('click', () => {
    currentCard = (currentCard < numOfCards) ? +currentCard+1 : 1
    setModalCard()
  })
})
prevButtons.forEach( (button) => {
  button.addEventListener('click', () => {
    currentCard = (currentCard > 1) ? +currentCard-1 : numOfCards
    setModalCard()
  })
})

const setModalCard = function() {
  allModalCards.forEach((card) => {
    card.setAttribute("aria-hidden", true)
  })
  const modalCardVisible = dialog.querySelector(`[data-card="${currentCard}"]`)
  modalCardVisible.setAttribute("aria-hidden", false);
}