import styled from 'styled-components'

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined
  func?: () => void
  text: string
}

export function DarkButton(props: ButtonProps) {
  const { func, text, type } = props
  return <Dark type={type} onClick={func}>{text}</Dark>
}

export function GrayButton(props: ButtonProps) {
  const { func, text, type } = props
  return <Gray type={type} onClick={func}>{text}</Gray>
}

export function RedButton(props: ButtonProps) {
  const { func, text, type } = props
  return <Red type={type} onClick={func}>{text}</Red>
}

export function PurpleButton(props: ButtonProps) {
  const { func, text, type } = props
  return <Purple type={type} onClick={func}>{text}</Purple>
}

const Button = styled.button`
  color: var(--color-white);
  border-radius: 2.4rem;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.7rem;
  border: none;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.3);
  }
`
const Dark = styled(Button)`
  background: var(--color-very-light-black);
`

const Gray = styled(Button)`
  background: var(--color-dark-gray);
`

const Red = styled(Button)`
  background: var(--color-red);
`

const Purple = styled(Button)`
  background: var(--color-purple);
`
