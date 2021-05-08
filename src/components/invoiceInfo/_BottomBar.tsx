import { useContext } from 'react'
import styled from 'styled-components'
import { InvoiceContext } from '../../contexts/InvoiceInfoContext'
import { StorageContext } from '../../contexts/StorageContext'
import { GrayBtn, RedBtn, PurpleBtn } from '../shared/_Buttons'

interface BottomBarProps {
  id: string
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

  button {
    font-size: 13px;
  }

  .grayBtn {
    width: 22.6%;
  }

  .redBtn {
    width: 27.3%;
  }

  .purpleBtn {
    width: 45.6%;
  }

  .large {
    width: 48%;
  }
`

export function BottomBar({ id }: BottomBarProps) {
  const { editInvoice, changeToPaidInvoice } = useContext(StorageContext)
  const { status, openCloseModal } = useContext(InvoiceContext)

  return (
    <BottomBarContainer>
      <GrayBtn
        type="button"
        className={`grayBtn ${status === 'pending' ? '' : 'large'}`}
        onClick={() => editInvoice(id)}
      >
        Edit
      </GrayBtn>
      <RedBtn
        type="button"
        className={`redBtn ${status === 'pending' ? '' : 'large'}`}
        onClick={openCloseModal}
      >
        Delete
      </RedBtn>
      {status === 'pending' && (
        <PurpleBtn
          type="button"
          className="purpleBtn"
          onClick={() => changeToPaidInvoice(id)}
        >
          Mark as paid
        </PurpleBtn>
      )}
    </BottomBarContainer>
  )
}