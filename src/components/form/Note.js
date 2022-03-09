import { format } from "date-fns"
import ReactMarkdown from "react-markdown"
import { Link } from "react-router-dom"
import styled from "styled-components"
import * as style from "../../variables/Variables"

const StyledNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: rgb(35, 35, 35);
  margin-bottom: 0.5rem;

  & * {
    margin: 0;
  }
`

const StyledMarkdownContainer = styled(ReactMarkdown)`
  padding: 0.5rem 0.5rem 0rem 0.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

const StyledDateButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  button {
    border: none;
    width: 5rem;
    color: whitesmoke;
    background-color: crimson;
    padding: 0.5rem;
  }
`

const DateContainer = styled.div`
  background-color: rgb(50, 50, 50);
  padding: 0.5rem;
`

const StyledRouterLink = styled(Link)`
  text-decoration: none;
  color: palegoldenrod;
  cursor: pointer;
`

const Note = ({ note, notesList, setSingleNote, setNotesList, className, setIsSingleNote }) => {
  const handleDeleteNote = () => {
    setNotesList(notesList.filter(item => item.id !== note.id))
  }

  const handleAddSingleNote = () => {
    setSingleNote(notesList.filter(item => item.id === note.id))
    setIsSingleNote(true)
  }

  const noteAddDate = format(Date.now(), "yyyy-MM-dd")

  return (
    <StyledNoteContainer className={className}>
      <StyledMarkdownContainer children={note.text} />
      <StyledDateButtonContainer>
        <StyledRouterLink to="/single" onClick={handleAddSingleNote}>
          <DateContainer>{noteAddDate}</DateContainer>
        </StyledRouterLink>

        <button onClick={handleDeleteNote}>Delete</button>
      </StyledDateButtonContainer>
    </StyledNoteContainer>
  )
}

export default Note
