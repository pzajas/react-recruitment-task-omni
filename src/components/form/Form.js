import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import PrimaryButton from "../../elements/buttons/PrimaryButton"
import List from "./List"
import SingleNote from "./SingleNote"

const StyledFormContainer = styled.div`
  padding: 3rem;
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

const StyledList = styled(List)`
  width: 50vw;
`

const Form = () => {
  const [noteText, setNoteText] = useState("")
  const [notesList, setNotesList] = useState([])
  const [singleNote, setSingleNote] = useState([])
  const [isSingleNote, setIsSingleNote] = useState(false)

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

  const handleIsSingleNote = () => {
    setIsSingleNote(!isSingleNote)
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
        <textarea placeholder="Add your note here..." value={noteText} onChange={handleTextChange} />
        <StyledButtonContainer>
          {isSingleNote ? (
            <Link to="/">
              <PrimaryButton onClick={handleIsSingleNote}>Go Back</PrimaryButton>
            </Link>
          ) : (
            <PrimaryButton>Add note</PrimaryButton>
          )}
        </StyledButtonContainer>
      </StyledForm>
      <Routes>
        s
        <Route
          path="/"
          element={
            <div>
              <StyledList
                notesList={notesList}
                singleNote={singleNote}
                isSingleNote={isSingleNote}
                setIsSingleNote={setIsSingleNote}
                setNotesList={setNotesList}
                setSingleNote={setSingleNote}
              />
            </div>
          }
        />
        <Route
          path="/single"
          element={
            <SingleNote
              isSingleNote={isSingleNote}
              setIsSingleNote={setIsSingleNote}
              notesList={notesList}
              singleNote={singleNote}
              setSingleNote={setSingleNote}
              setNotesList={setNotesList}
            />
          }
        />
      </Routes>
    </StyledFormContainer>
  )
}

export default Form
