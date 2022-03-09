import { format } from "date-fns"
import React from "react"
import ReactMarkdown from "react-markdown"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
  background-color: rgb(35, 35, 35);
  margin-bottom: 0.5rem;
  color: white;
  width: 50vw;

  & * {
    margin: 0;
  }
`

const StyledMarkdownContainer = styled(ReactMarkdown)`
  padding: 0.5rem 0.5rem 0rem 0.5rem;
`

const StyledButtonContainer = styled.div`
  display: flex;
`

// const StyledRouterLink = styled(Link)`
//   margin-left: 0.5rem;
//   text-decoration: none;
//   cursor: pointer;
// `

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
    cursor: pointer;
  }
`

const DateContainer = styled.div`
  background-color: rgb(50, 50, 50);
  padding: 0.5rem;
`

const SingleNote = ({ singleNote, setSingleNote, setIsSingleNote, setNotesList, notesList }) => {
  const handleDeleteSingleNote = () => {
    setSingleNote([])
    setNotesList(notesList.filter(item => item !== singleNote[0]))
    setIsSingleNote(false)
  }

  const noteAddDate = format(Date.now(), "yyyy-MM-dd")
  return (
    <StyledNoteContainer>
      {singleNote.map(note => (
        <div>
          <StyledMarkdownContainer>{note.text}</StyledMarkdownContainer>
          <StyledDateButtonContainer>
            <DateContainer>{noteAddDate}</DateContainer>
            <StyledButtonContainer>
              <Link to="/">
                <button onClick={handleDeleteSingleNote}>Delete</button>
              </Link>
            </StyledButtonContainer>
          </StyledDateButtonContainer>
        </div>
      ))}
    </StyledNoteContainer>
  )
}

export default SingleNote
