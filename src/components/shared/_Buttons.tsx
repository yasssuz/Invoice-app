import { FC } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined
  cn?: string
  func?: () => void
}

export const DarkButton: FC<ButtonProps> = (props) => {
  const { cn, func, type, children } = props
  return <Dark className={cn} type={type} onClick={func}>{children}</Dark>
}

export const GrayButton: FC<ButtonProps> = (props) => {
  const { cn, func, type, children } = props
  return <Gray className={cn} type={type} onClick={func}>{children}</Gray>
}

export const RedButton: FC<ButtonProps> = (props) => {
  const { cn, func, type, children } = props
  return <Red className={cn} type={type} onClick={func}>{children}</Red>
}

export const PurpleButton: FC<ButtonProps> = (props) => {
  const { cn, func, type, children } = props
  return <Purple className={cn} type={type} onClick={func}>{children}</Purple>
}

const Button = styled.button`
  color: white;
  border-radius: 2.4rem;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.7rem;
  border: none;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.25);
  }
`
const Dark = styled(Button)`
  color: var(--color-white);
  background: var(--color-very-light-black);

  &:hover {
    filter: brightness(1.1)
  }
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
