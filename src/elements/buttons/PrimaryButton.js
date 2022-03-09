import styled from "styled-components"

const StyledPrimaryButton = styled.button`
  border: none;
  padding: 0.5rem;
  width: 5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`

const PrimaryButton = ({ children, isSingleNote, setIsSingleNote }) => {
  const handleIsSingleNote = () => {
    setIsSingleNote(!isSingleNote)
  }

  return <StyledPrimaryButton onClick={handleIsSingleNote}>{children}</StyledPrimaryButton>
}

export default PrimaryButton
