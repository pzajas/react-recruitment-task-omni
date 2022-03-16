import styled from "styled-components"

const StyledPrimaryButton = styled.button`
  border: none;
  padding: 0.5rem;
  width: 5rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;

  cursor: pointer;
`

const PrimaryButton = ({ children, className }) => {
  return <StyledPrimaryButton className={className}>{children}</StyledPrimaryButton>
}

export default PrimaryButton
