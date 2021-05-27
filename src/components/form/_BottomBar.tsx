import { DarkButton, GrayButton, PurpleButton } from "../shared/_Button";
import styled from 'styled-components'

interface BottomBarProps {
  handleModal: () => void
}

export function BottomBar(props: BottomBarProps) {
  const { handleModal } = props

  function handleDraft() {
    console.log('preventing submit')
  }

  return (
    <BottomBarContainer>
      <DarkButton type="button" func={handleModal} text="Discard" />
      <GrayButton type="button" func={handleDraft} text="Save as Draft" />
      <PurpleButton type="submit" text="Save & Send" />
    </BottomBarContainer>
  )
}

const BottomBarContainer = styled.footer`
  padding: 2.2rem 24px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: var(--color-light-black);
  min-height: 9.1rem;
  margin-top: 8.8rem;
  width: 100%;

  button:nth-of-type(1) {
    width: 25%;
  }

  button:nth-of-type(2) {
    width: 35%;
  }

  button:nth-of-type(3) {
    width: 34.5%;
  }
`
