import Form from "./components/form/Form"
import styled from "styled-components"
import * as style from "./variables/Variables"

const StyledApplicationContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${style.PrimaryColor};

  & * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
`

function App() {
  return (
    <StyledApplicationContainer>
      <Form />
    </StyledApplicationContainer>
  )
}

export default App
