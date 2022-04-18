const current = new Date()

export function GetNotes (){
    return JSON.parse(localStorage.getItem("notes"))
}

export function AddNote (newNote){
    const notes = GetNotes()
    newNote.id = Math.floor(Math.random()*10000) + 1
    newNote.date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    notes.push(newNote)
    localStorage.setItem('notes', JSON.stringify(notes));
}

export function DeleteNote (id){
    const notes = GetNotes()
    let filteredData = notes.filter((note) => note.id !== id)
    localStorage.setItem('notes', JSON.stringify(filteredData));
}

export function EditNote (editForm){
   editForm.date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   const notes = GetNotes()
   const findNote = notes.find((note) => note.id === editForm.id)
   findNote.title = editForm.title
   findNote.content = editForm.content
   console.log(editForm)
   localStorage.setItem('notes', JSON.stringify(notes))
}
