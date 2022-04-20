const current = new Date()

export const getNotes = async () => {
    const res = await fetch('http://localhost:8000/notes')
    const data = await res.json()   
    return data
  }

export const addNote = async (newNote) => {
    getNotes()
    newNote.date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
}

export const deleteNote = async (id) => {
    getNotes()
    fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
}

export const editNote = async (editForm) => {
    getNotes()
    editForm.date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    fetch(`http://localhost:8000/notes/${editForm.id}`, {
      method: 'PUT',
      body: JSON.stringify(editForm),
      headers: {
        'Content-type': 'application/json',
      },
    })
}
