const dialogs = document.querySelectorAll("dialog")
const openModalButtons = document.querySelectorAll(".showModal")
const allModalCards = document.querySelectorAll("dialog .card")
let numOfCards = 0
let currentCard = 1
let previousCard = null

openModalButtons.forEach( (button) => {
  numOfCards++
  button.addEventListener("click", (e) => {
    const openID = e.target.dataset.open
    currentCard = openID
    setModalCard()
  })
})

const nextButtons = document.querySelectorAll('.next')
const prevButtons = document.querySelectorAll('.prev')


nextButtons.forEach( (button) => {
  button.addEventListener('click', () => {
    previousCard = currentCard
    currentCard = (currentCard < numOfCards) ? +currentCard+1 : 1
    setModalCard()
  })
})
prevButtons.forEach( (button) => {
  button.addEventListener('click', () => {
    previousCard = currentCard
    currentCard = (currentCard > 1) ? +currentCard-1 : numOfCards
    setModalCard()
  })
})

const setModalCard = function() {
  if (previousCard) document.querySelector(`#dialogID-${previousCard}`)
    .classList.remove("show")
  const modalCardVisible = document.querySelector(`#dialogID-${currentCard}`)
  modalCardVisible.showModal()
  modalCardVisible.classList.add("show")
}

dialogs.forEach((dialog) => {
  const content = dialog.querySelector('.card-content')

  content.addEventListener("transitionend", (e) => {
    const style = window.getComputedStyle(e.target)
    if (style.opacity === "0") {
      console.log("close:", dialog)
      dialog.close()
    }
  })
})