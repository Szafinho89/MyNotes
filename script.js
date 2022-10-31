const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('delete-note')
const deleteAllBtn = document.querySelector('.delete-all')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category') //tu dalej pogrzebac
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue
let cardID = 0

const openPanel = () => {
    notePanel.style.display= 'flex'
}

const closePanel = () => {
    notePanel.style.display= 'none'
    category.selectedIndex = 0
    textArea.value = ''
    error.style.visibility= 'hidden'
}

const addNote = () => {
    error.style.visibility= 'hidden'
    if (category.selectedIndex !== 0   &&   textArea.value !== '') {
        createNote()
        closePanel()
    } else {
        error.style.visibility= 'visible'

    }
}

const createNote = () => {
    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)
    newNote.innerHTML= 
    `<div class="note-header"><h3 class="note-title">${selectedValue}</h3><button class="delete-note" onclick="deleteNote(${cardID})"><i class="fas fa-times icon"></i></button></div><div class="note-body">${textArea.value}</div>`
    
    noteArea.append(newNote)
    checkColor(newNote)
    cardID++
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].innerText
}

const checkColor = (newNote) => {
    switch (selectedValue) {
        case 'Zakupy':
            newNote.style.backgroundColor= 'yellow'
            break;
        case 'Praca':
            newNote.style.backgroundColor= 'green'
            break;
        case 'Inne':
            newNote.style.backgroundColor= 'blue'
            break;
    }
}

const deleteNote = (id) => {
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)
}

const deleteAll = () => {
    noteArea.innerHTML= ''
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAll)