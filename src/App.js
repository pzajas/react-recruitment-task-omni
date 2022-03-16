import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Form from "./components/form/Form"
import SingleNote from "./components/notes/ExtendedNote"
import Notes from "./components/notes/Notes"
import * as style from "./variables/Variables"

const StyledApplicationContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${style.PrimaryColor};
  display: flex;
  justify-content: center;
  padding: 3rem;

  & * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
`

function App() {
  const [noteText, setNoteText] = useState("")
  const [notesList, setNotesList] = useState([])
  const [singleNote, setSingleNote] = useState([])

  return (
    <StyledApplicationContainer>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Form
                singleNote={singleNote}
                noteText={noteText}
                setNoteText={setNoteText}
                notesList={notesList}
                singleNote={singleNote}
                setNotesList={setNotesList}
                setSingleNote={setSingleNote}
              />
              <Notes
                notesList={notesList}
                singleNote={singleNote}
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
              notesList={notesList}
              singleNote={singleNote}
              setSingleNote={setSingleNote}
              setNotesList={setNotesList}
            />
          }
        />
      </Routes>
    </StyledApplicationContainer>
  )
}

export default App
