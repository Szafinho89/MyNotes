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
// const noteTitle = document.querySelector('.note-title')
// const noteBody = document.querySelector('.note-body')
let selectedValue;
let cardID = 0;

const openPanel = () => {
    notePanel.style.display = 'flex'
}

const closePanel = () => {
    notePanel.style.display = 'none'
    error.style.visibility = 'hidden'
    textArea.value = ''
    category.selectedIndex = 0;  //daje się selectedIndex = 0 a ja zrobilem category.value='0' i tez dzialalo
}

const addNote = () => {
    if (textArea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote()
    } else {
        error.style.visibility = 'visible'
    }
}

const createNote = () => {
    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)
    newNote.innerHTML= `<div class="note-header"><h3 class="note-title">${selectedValue}</h3><button class="delete-note" onclick="deleteNote(${cardID})"><i class="fas fa-times icon"></i></button></div><div class="note-body">${textArea.value}</div>`
    noteArea.append(newNote)
    cardID++
    closePanel()
    checkColor(newNote)

}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
}

const checkColor = (note) => {
    switch (selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor= 'yellow'
            break;
        case 'Praca':
            note.style.backgroundColor= 'green'
            break
        case 'Inne':
            note.style.backgroundColor= 'blue'
            break;
    }
}

const deleteNote = (id) => {
    const noteToDelete = document.getElementById(id);
    console.log(noteToDelete);
    noteArea.remove(noteToDelete)
}

const deleteAllNotes = () => {

    noteArea.textContent= ''
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)


