import styled from "styled-components"
import Note from "./Note"

const StyledListContainer = styled.div`
  width: 50vw;
`

const StyledList = styled.li`
  color: white;
  list-style: none;
`

const Notes = ({ notesList, setNotesList, setSingleNote, className }) => {
  return (
    <StyledListContainer className={className}>
      {notesList.map(note => (
        <StyledList key={note.id}>
          <Note setNotesList={setNotesList} setSingleNote={setSingleNote} note={note} notesList={notesList} />
        </StyledList>
      ))}
    </StyledListContainer>
  )
}

export default Notes
