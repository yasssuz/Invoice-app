import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: 72rem;
  width: 100%;
  background: var(--color-nearly-black);
  position: absolute;
  z-index: 900;
  top: 0;
  bottom: 0;
  padding-top: 10.4rem;
  height: 100vh;
  overflow: auto;

  #go-back-component {
    padding: 0 2.4rem;
  }
`

export const Title = styled.h1`
  margin: 2.4rem 0;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: var(--color-white);
  padding: 0 2.4rem;
`

export const Fieldset = styled.fieldset`
  border: none; 
  padding: 0 2.4rem;

  & + & {
    margin-top: 4.8rem;
  }
`

export const Legend = styled.legend`
  color: var(--color-purple);
  font-size: 1.3rem;
  line-height: 1.5rem;
  font-weight: bold;
`

export const SmallInputsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 2.3rem; 

  .last-child {
    grid-column: 1 /span 2;
  }
`

export const InputBlock = styled.div`
  margin-top: 2.4rem;
  position: relative;

  &.error {
    label {
      color: var(--color-red);
    }

    input, 
    select {
      border: 1px solid var(--color-red);
    }
  }
`

export const Label = styled.label`
  display: block;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-semi-gray);
  margin-bottom: 1rem;
`

export const TextInput = styled.input`
  width: 100%;
  border-radius: 0.4rem;
  height: 4.8rem;
  border: 1px solid var(--color-very-light-black);
  background: var(--color-light-black);
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: var(--color-white);
  padding: 0 2rem;

  &.date {
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
    }  

    &::after {
      content: url('/assets/icon-calendar.svg');
      margin-bottom: -2px;
    }
  }
`

export const Selector = styled.select`
  width: 100%;
  border-radius: 0.4rem;
  height: 4.8rem;
  border: 1px solid var(--color-very-light-black);
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: var(--color-white);
  padding: 0 2rem;
  appearance: none; 
  background: url('/assets/icon-arrow-down.svg') no-repeat, var(--color-light-black);
  background-position: calc(100% - 2rem) center;
`

export const Option = styled.option`
  font-weight: bold;
`