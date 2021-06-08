import { useContext } from 'react'
import styled from 'styled-components'
import { FormContext } from '../../contexts/FormContext'
import { DarkButton, PurpleButton, RedButton } from '../shared/_Buttons'

interface BottomBarProps {
  status: string
  handleModal: () => void
  setPaid: () => void
}

export const BottomBar = (props: BottomBarProps) => {
  const { status, handleModal, setPaid } = props
  const { handleForm, handleFormEdit } = useContext(FormContext)

  return (
    <BottomBarContainer>

      <DarkButton
        cn={`${status !== 'pending' && 'large'}`}
        type="button"
        func={() => {
          handleForm()
          handleFormEdit()
        }}
      >
        Edit
      </DarkButton>

      <RedButton
        type="button"
        func={handleModal}
        cn={`${status !== 'pending' && 'large'}`}
      >
        Delete
      </RedButton>

      {status === 'pending' && (
        <PurpleButton
          type="button"
          func={setPaid}
        >
          Mark as paid
        </PurpleButton>
      )}
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
  margin-top: 5.6rem;
  border-radius: 3rem 3rem 0 0;

  @media screen and (min-width: 720px) {
    display: none;
  }

  button:nth-of-type(1) {
    width: 22.6%;
  }

  button:nth-of-type(2) {
    width: 27.3%;
  }

  button:nth-of-type(3) {
    width: 45.6%;
  }

  button {
    font-size: 13px;
  }

  button.large {
    width: 48%;
  }
`
