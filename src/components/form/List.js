import Note from "./Note"
import styled from "styled-components"

const StyledListContainer = styled.div``

const StyledList = styled.li`
  color: white;
  list-style: none;
`

const List = ({ notesList, setNotesList, className }) => {
  return (
    <StyledListContainer className={className}>
      {notesList.map(note => (
        <StyledList key={note.id}>
          <Note setNotesList={setNotesList} note={note} notesList={notesList} />
        </StyledList>
      ))}
    </StyledListContainer>
  )
}

export default List
