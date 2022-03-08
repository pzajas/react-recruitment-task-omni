import ReactMarkdown from "react-markdown"
import { format } from "date-fns"

const Note = ({ note, notesList, setNotesList }) => {
  const handleDeleteNote = () => {
    setNotesList(notesList.filter(item => item.id !== note.id))
  }

  const noteAddDate = format(Date.now(), "yyyy-MM-dd")
  return (
    <div>
      <ReactMarkdown children={note.text} />
      {noteAddDate}
      <button onClick={handleDeleteNote}>Delete</button>
    </div>
  )
}

export default Note
