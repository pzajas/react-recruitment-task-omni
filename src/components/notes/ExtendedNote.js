import { format } from "date-fns"
import ReactMarkdown from "react-markdown"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PrimaryButton from "../../elements/buttons/PrimaryButton"

const StyledNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
  margin-bottom: 0.5rem;
  color: white;
  width: 50vw;
  & * {
    font-size: 0.9rem;
    margin: 0;
  }
`

const SingleNoteContainer = styled.div`
  background-color: rgb(35, 35, 35);
`

const StyledMarkdownContainer = styled(ReactMarkdown)`
  padding: 0.5rem 0.5rem 0rem 0.5rem;
`

const StyledDateButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  /* button {
    border: none;
    width: 5rem;
    color: whitesmoke;
    background-color: crimson;
    padding: 0.5rem;
    cursor: pointer;
  } */
`

const StyledButtonContainer = styled.div`
  display: flex;
`

const StyledPrimaryButtonBack = styled(PrimaryButton)``

const StyledPrimaryButtonDelete = styled(PrimaryButton)`
  margin-left: 0.5rem;
  color: white;
  background-color: crimson;
`

const DateContainer = styled.div`
  background-color: rgb(50, 50, 50);
  padding: 0.5rem;
`

const ExtendedNote = ({ singleNote, notesList }) => {
  const handleDeleteSingleNote = () => {
    const filteredNotes = notesList.filter(item => item.id !== singleNote[0].id)
    localStorage.setItem("notes", JSON.stringify(filteredNotes))
  }

  const noteAddDate = format(Date.now(), "yyyy-MM-dd")
  return (
    <StyledNoteContainer>
      {singleNote.map(note => (
        <SingleNoteContainer key={note.id}>
          <StyledMarkdownContainer>{note.text}</StyledMarkdownContainer>
          <StyledDateButtonContainer>
            <DateContainer>{noteAddDate}</DateContainer>
            <StyledButtonContainer>
              <Link to="/">
                <StyledPrimaryButtonBack>Go Back</StyledPrimaryButtonBack>
              </Link>
              <Link to="/" onClick={handleDeleteSingleNote}>
                <StyledPrimaryButtonDelete>Delete</StyledPrimaryButtonDelete>
              </Link>
            </StyledButtonContainer>
          </StyledDateButtonContainer>
        </SingleNoteContainer>
      ))}
    </StyledNoteContainer>
  )
}

export default ExtendedNote
