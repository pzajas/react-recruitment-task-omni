import { useState } from "react"
import List from "./List"

import styled from "styled-components"

const StyledFormContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    position: relative;
    width: 50vw;
    resize: none;
    border: none;
    height: 20vh;
    margin-bottom: 0.5rem;

    &:focus {
      outline: none;
    }
  }

  /* button {
    position: absolute;
    top: 25.5%;
    right: 15.78rem;
    
  } */
`

const StyledButtonContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: right;

  button {
    border: none;
    padding: 0.5rem;
    width: 5rem;
    margin-bottom: 0.5rem;
  }
`

const StyledList = styled(List)`
  width: 50vw;
`

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
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmitNote}>
        <textarea value={noteText} onChange={handleTextChange} />
        <StyledButtonContainer>
          <button>Add note</button>
        </StyledButtonContainer>
      </StyledForm>
      <StyledList notesList={notesList} setNotesList={setNotesList} />
    </StyledFormContainer>
  )
}

export default Form
