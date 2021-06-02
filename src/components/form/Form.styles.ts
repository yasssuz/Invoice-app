import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: 61.6rem;
  width: 100%;
  background: var(--color-nearly-black);
  position: absolute;
  z-index: 900;
  padding-top: 10.4rem;
  top: 0;
  bottom: 0;
  overflow: auto;

  #go-back-component {
    margin: 0 2.4rem;

    @media screen and (min-width: 630px) {
      display: none;
    }
  }

  @media screen and (min-width: 630px) {
    top: 8rem;
    border-radius: 0px 20px 20px 0px;;
    padding: 5.6rem 1.5rem 3.2rem 5.6rem;

    &::-webkit-scrollbar {
      width: 37px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }  

    &::-webkit-scrollbar-thumb {
      background: var(--color-light-black);
      border-radius: 4px;
      border-right: 29px solid var(--color-nearly-black);
    }
  }

  @media screen and (min-width: 1000px) {
    left: 10.3rem;
    top: 0;
  }
`

export const Title = styled.h1`
  margin: 2.4rem;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: var(--color-white);

  @media screen and (min-width: 630px) {
    margin: 0 0 4.8rem;
  }
`

export const Fieldset = styled.fieldset`
  border: none; 
  margin: 0 2.4rem;

  & + & {
    margin-top: 4.8rem;
  }

  @media screen and (min-width: 630px) {
    margin: 0;
  }

  &:nth-child(4) {
    margin-top: 2.8rem;
  }
`

export const Legend = styled.legend`
  color: var(--color-purple);
  font-size: 1.3rem;
  line-height: 1.5rem;
  font-weight: bold;
`

export const LegendItem = styled(Legend)`
  color: hsla(225, 14%, 53%, 1);
  font-size: 1.8rem;
  line-height: 3.2rem;
`

export const SmallInputsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 2.3rem; 

  div:last-of-type {
    grid-column: 1 /span 2;
  }

  @media screen and (min-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0 2.4rem;

    div:last-of-type {
      grid-column: unset;
    }
  }
`

export const ItemInfoArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 0 1.6rem;
  position: relative;

  div:first-of-type {
    grid-column: 1 /4;
  }

  @media screen and (min-width: 630px) {
    grid-template-columns: 3fr 0.7fr 1.45fr 1.56fr;

    div:first-of-type {
      grid-column: unset;
    }  
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

export const DatesInputArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0 2.4rem;
  }
`

export const Label = styled.label`
  display: block;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-semi-gray);
  margin-bottom: 1rem;

  @media screen and (min-width: 630px) {
    color: var(--color-grayish-purple);
  }
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

  &[type=date] {
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
    }  

    &::after {
      content: url('/assets/icon-calendar.svg');
      margin-bottom: -2px;
    }
  }

  &[type=number] {
    padding: 1.5rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
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

export const Total = styled.strong`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  color: var(--color-semi-gray);

  @media screen and (min-width: 650px) {
    color: var(--color-grayish-purple);
  }
`

export const AddItemBtn = styled.button`
  border-radius: 2.4rem;
  background: var(--color-very-light-black);
  font-size: 1.3rem;
  line-height: 1.7rem;
  text-align: center;
  padding: 1.55rem 1rem;
  border: none;
  font-weight: bold;
  color: var(--color-semi-gray);
  width: 100%;
  margin-top: 4.8rem;

  @media screen and (min-width: 650px) {
    color: var(--color-grayish-purple);
    margin-top: 3rem;
  }
`

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 8px;
  bottom: 1.6rem;
  cursor: pointer;
`