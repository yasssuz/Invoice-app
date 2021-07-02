import { DarkButton, GrayButton, PurpleButton } from "../shared/_Buttons";
import styled from 'styled-components'
import { useCallback, useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import { changeToPendingInvoice } from "../../utils/storage";

interface BottomBarProps {
  handleDraft: () => void
  setStatus: any;
  status: string | undefined
  id: string
}

export function BottomBar(props: BottomBarProps) {
  const { handleForm, formEdit, handleFormEdit } = useContext(FormContext)
  const { status, setStatus, handleDraft, id } = props

  const setPending = useCallback(() => {
    setStatus('pending')
    changeToPendingInvoice(id)
  }, [id, setStatus])

  return (
    <BottomBarContainer>
      {formEdit ? (
        <Editing>
          <DarkButton type="button" func={() => {
            handleForm()
            handleFormEdit()
          }}>
            Cancel
          </DarkButton>

          <PurpleButton type="submit" func={() => {
            status === 'draft' && setPending()
          }}>
            Save Changes
          </PurpleButton>
        </Editing>
      ) : (
        <NotEditing>
          <DarkButton type="button" func={handleForm}>
            Discard
          </DarkButton>

          <GrayButton type="button" func={handleDraft}>
            Save as Draft
          </GrayButton>

          <PurpleButton type="submit">
            Save & Send
          </PurpleButton>
        </NotEditing>
      )}
    </BottomBarContainer >
  )
}

const BottomBarContainer = styled.footer`
  margin-top: 8.8rem;

  div {
    min-height: 9.1rem;
    padding: 2.2rem 24px;
    background: var(--color-light-black);
    display: flex;
    align-items: stretch;

    @media screen and (min-width: 630px) {
      margin-top: 4.7rem;
      background: transparent;
      padding: 2.2rem 0;
    }
  }
`

const Editing = styled.div`
  justify-content: flex-end;

  button:nth-of-type(1) {
    width: 32%;
    max-width: 11rem;
  }

  button:nth-of-type(2) {
    width: 45%; 
    margin-left: 1rem;
    max-width: 15.7rem;
  }
`

const NotEditing = styled.div`
  justify-content: space-between;

  button:nth-of-type(1) {
    width: 24%;
  }

  button:nth-of-type(2) {
    width: 35%;
  }

  button:nth-of-type(3) {
    width: 34.5%;
  }

  @media screen and (min-width: 630px) {
    justify-content: flex-end;

    button:nth-of-type(1) {
      width: 10.5rem;
      margin-right: auto;
    }

    button:nth-of-type(2) {
      width: 14rem;
      margin-right: 1.2rem
    }

    button:nth-of-type(3) {
      width: 13.5rem;
    }
  }
`
