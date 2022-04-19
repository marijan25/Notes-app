const current = new Date()

export function getNotes (){
    return JSON.parse(localStorage.getItem("notes"))
}

export function addNote (newNote){
    const notes = getNotes()
    newNote.id = Math.floor(Math.random()*10000) + 1
    newNote.date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    notes.push(newNote)
    localStorage.setItem('notes', JSON.stringify(notes));
}

export function deleteNote (id){
    const notes = getNotes()
    let filteredData = notes.filter((note) => note.id !== id)
    localStorage.setItem('notes', JSON.stringify(filteredData));
}

export function editNote (editForm){
    editForm.date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const notes = getNotes()
    const findNote = notes.find((note) => note.id === editForm.id)
    findNote.title = editForm.title
    findNote.content = editForm.content
    findNote.date = editForm.date
    localStorage.setItem('notes', JSON.stringify(notes))
}
