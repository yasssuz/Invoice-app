import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: ReactNode
}

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

const GrayButton = styled(Button)`
  background: var(--color-very-light-black);
`

const RedButton = styled(Button)`
  background: var(--color-red);
`

const PurpleButton = styled(Button)`
  background: var(--color-purple);
`

export function GrayBtn({ children }: ButtonProps) {
  return <GrayButton type="button">{children}</GrayButton>
}

export function RedBtn({ children }: ButtonProps) {
  return <RedButton type="button">{children}</RedButton>
}

export function PurpleBtn({ children }: ButtonProps) {
  return <PurpleButton type="button">{children}</PurpleButton>
}