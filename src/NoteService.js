var NoteService = {}
const current = new Date()

NoteService.GetNotes = function(){
    return JSON.parse(localStorage.getItem("notes"))
}

NoteService.AddNote = function(newNote){
    var notes = this.GetNotes()
    newNote.id = Math.floor(Math.random()*10000) + 1
    newNote.date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    notes.push(newNote)
    localStorage.setItem('notes', JSON.stringify(notes));
}

NoteService.DeleteNote = function(id){
    var notes = this.GetNotes()
    let filteredData = notes.filter((note) => note.id !== id)
    localStorage.setItem('notes', JSON.stringify(filteredData));
}

NoteService.EditNote = function(editForm){
   editForm.date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   var notes = this.GetNotes()
   var findNote = notes.find((note) => note.id === editForm.id)
   findNote.title = editForm.title
   findNote.content = editForm.content
   localStorage.setItem('notes', JSON.stringify(notes))
}

export default NoteService
