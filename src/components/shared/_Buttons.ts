import styled from 'styled-components'

const Button = styled.button`
  color: var(--color-white);
  border-radius: 2.4em;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.7rem;
  border: none;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.5);
  }
`

export const GrayBtn = styled(Button)`
  background: var(--color-very-light-black);
`

export const RedBtn = styled(Button)`
  background: var(--color-red);
`

export const PurpleBtn = styled(Button)`
  background: var(--color-purple);
`

