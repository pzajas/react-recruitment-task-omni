import ReactMarkdown from "react-markdown"
import { format } from "date-fns"
import styled from "styled-components"

const StyledNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
  background-color: rgb(35, 35, 35);
  margin-bottom: 0.5rem;

  & * {
    margin: 0;
  }
`

const StyledMarkdownContainer = styled(ReactMarkdown)``

const StyledDateButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    width: 5rem;
    color: whitesmoke;
    background-color: crimson;
  }
`

const Note = ({ note, notesList, setNotesList, className }) => {
  const handleDeleteNote = () => {
    setNotesList(notesList.filter(item => item.id !== note.id))
  }

  const noteAddDate = format(Date.now(), "yyyy-MM-dd")

  return (
    <StyledNoteContainer className={className}>
      <StyledMarkdownContainer children={note.text} />
      <StyledDateButtonContainer>
        {noteAddDate}
        <button onClick={handleDeleteNote}>Delete</button>
      </StyledDateButtonContainer>
    </StyledNoteContainer>
  )
}

export default Note
