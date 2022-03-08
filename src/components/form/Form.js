import { useState } from "react"
import List from "./List"

const Form = () => {
  const [noteText, setNoteText] = useState("")
  const [notesList, setNotesList] = useState([])

  const handleTextChange = e => {
    setNoteText(e.target.value)
  }

  const handleSubmitNote = e => {
    e.preventDefault()
    setNotesList([...notesList, { text: noteText, id: Math.random() * 1000 }])

    setNoteText("")
  }

  return (
    <div>
      <form onSubmit={handleSubmitNote}>
        <textarea value={noteText} onChange={handleTextChange} />
        <button>Add note</button>
      </form>
      <List notesList={notesList} setNotesList={setNotesList} />
    </div>
  )
}

export default Form
