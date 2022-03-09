import styled from "styled-components"
import Note from "./Note"

const StyledList = styled.li`
  color: white;
  list-style: none;
`

const List = ({ notesList, setNotesList, isSingleNote, setIsSingleNote, setSingleNote, className }) => {
  return (
    <div className={className}>
      {notesList.map(note => (
        <StyledList key={note.id}>
          <Note
            setIsSingleNote={setIsSingleNote}
            isSingleNote={isSingleNote}
            setNotesList={setNotesList}
            setSingleNote={setSingleNote}
            note={note}
            notesList={notesList}
          />
        </StyledList>
      ))}
    </div>
  )
}

export default List
