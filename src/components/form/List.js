import Note from "./Note"

const List = ({ notesList, setNotesList }) => {
  return (
    <div>
      {notesList.map(note => (
        <li key={note.id}>
          <Note setNotesList={setNotesList} note={note} notesList={notesList} />
        </li>
      ))}
    </div>
  )
}

export default List
