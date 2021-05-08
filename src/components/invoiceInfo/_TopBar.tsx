import { useContext } from 'react'
import styled from 'styled-components'
import { InvoiceContext } from '../../contexts/InvoiceInfoContext'
import { StorageContext } from '../../contexts/StorageContext'
import { GrayBtn, RedBtn, PurpleBtn } from '../shared/_Buttons'
import { StatusSwitcher } from '../shared/_Status'

interface TopbarProps {
  id: string
  status: string
}

const TopBar = styled.header`
  min-height: 9.1rem;
  width: 100%;
  background: var(--color-light-black);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 24px;
  margin-top: 3.2rem;

  @media screen and (min-width: 720px) {
    padding: 2rem 32px;
    min-height: 8.8rem;
  }
`

const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.5rem;
    color: var(--color-grayish-purple);

    @media screen and (min-width: 720px) {
      margin-right: 1.6rem
    }
  }

  @media screen and (min-width: 720px) {
    width: unset;
  }
`

const Buttons = styled.div`
  display: none;

  @media screen and (min-width: 720px) {
    display: flex;
  }

  button {
    min-height: 5.1rem;

    &:nth-child(1) {
      width: 7.9rem;
    }

    &:nth-child(2) {
      width: 9.5rem;
    }

    &:nth-child(3) {
      width: 14rem;
    }
  }

  button + button {
    margin-left: 1.5rem;
  }
`

export function Topbar({ status, id }: TopbarProps) {
  const { editInvoice, changeToPaidInvoice } = useContext(StorageContext)
  const { openCloseModal } = useContext(InvoiceContext)

  return (
    <TopBar>
      <Status>
        <span>Status</span>
        <StatusSwitcher status={status} />  {/*Component*/}
      </Status>
      <Buttons>

        <GrayBtn
          type="button"
          onClick={() => editInvoice(id)}>
          Edit
        </GrayBtn> {/*Component*/}

        <RedBtn
          type="button"
          onClick={openCloseModal}>
          Delete
        </RedBtn> {/*Component*/}

        {status === 'pending' && (
          <PurpleBtn
            type="button"
            onClick={() => changeToPaidInvoice(id)}>
            Mark a paid
          </PurpleBtn>
        )} {/*Component*/}

      </Buttons>
    </TopBar>
  )
}