const Note = ({ note, notesList, setNotesList }) => {
  const handleDeleteNote = () => {
    setNotesList(notesList.filter(item => item.id !== note.id))
  }

  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`

  return (
    <div>
      {note.text}
      {date}
      <button onClick={handleDeleteNote}>Delete</button>
    </div>
  )
}

export default Note
