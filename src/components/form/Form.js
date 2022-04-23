import { useEffect } from "react"
import styled from "styled-components"
import PrimaryButton from "../../elements/buttons/PrimaryButton"

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

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
`

const StyledButtonContainer = styled.div`
  width: 100%;
  text-align: right;
`

const Form = ({ noteText, setNoteText, notesList, setNotesList }) => {
  useEffect(() => {
    handleGetLocalStorage()
  }, [])

  useEffect(() => {
    handleSaveLocalStorage()
  }, [notesList])

  const handleTextChange = e => {
    setNoteText(e.target.value)
  }

  const handleSubmitNote = e => {
    e.preventDefault()

    if (noteText.length !== 0) {
      setNotesList([...notesList, { text: noteText, id: Math.random() * 1000 }])
      setNoteText("")
    } else {
      alert("Add a note pwetty pwease!")
    }
  }

  const handleSaveLocalStorage = () => {
    localStorage.setItem("notes", JSON.stringify(notesList))
  }

  const handleGetLocalStorage = () => {
    let localStorageNotes = JSON.parse(localStorage.getItem("notes"))
    if (localStorage.getItem("notes") === null) localStorage.setItem("notes", JSON.stringify([]))
    else setNotesList(localStorageNotes)
  }

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmitNote}>
        <textarea
          placeholder="Add your note here..."
          value={noteText}
          placeholder="Add a note..."
          onChange={handleTextChange}
        />
        <StyledButtonContainer>
          <PrimaryButton>Add note</PrimaryButton>
        </StyledButtonContainer>
      </StyledForm>
    </StyledFormContainer>
  )
}

export default Form
