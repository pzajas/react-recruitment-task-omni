import ReactMarkdown from "react-markdown"

const Note = ({ note, notesList, setNotesList }) => {
  const handleDeleteNote = () => {
    setNotesList(notesList.filter(item => item.id !== note.id))
  }

  const markdown = `A paragraph with *emphasis* and **strong importance**.`
  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`

  return (
    <div>
      <ReactMarkdown children={note.text} />
      {date}
      <button onClick={handleDeleteNote}>Delete</button>
    </div>
  )
}

export default Note
