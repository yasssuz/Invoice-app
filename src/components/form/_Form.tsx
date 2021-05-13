import styled from 'styled-components'

const FormContainer = styled.div`
  max-width: 72rem;
  width: 100%;
  background: green;
  position: absolute;
  z-index: 900;
  top: 0;
  bottom: 0;
  padding: 10.4rem 2.4rem 0;
`

export function Form() {
  return (
    <FormContainer>
      <h1>hello</h1>
    </FormContainer>
  )
}