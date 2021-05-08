import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MainCard } from '../components/invoiceInfo/_MainCard'
import { Topbar } from '../components/invoiceInfo/_TopBar'
import { BottomBar } from '../components/invoiceInfo/_BottomBar'
import { useContext, useEffect } from 'react'
import { InvoiceContext } from '../contexts/InvoiceInfoContext'
import { DeleteModal } from '../components/invoiceInfo/_DeleteModal'

const Overlay = styled.div`
  background: hsla(0, 0%, 0%, 0.5);
  opacity: 0.5;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;

  .active {
    visibility: visible;
    opacity: 1;
  }
`

const InfoContainer = styled.div`
  margin: 10.4rem auto 0;
  max-width: 75rem;
  padding: 0 24px;
  transition: padding 0.3s ease;
  position: relative;

  @media screen and (min-width: 720px) {
    margin-top: 12.8rem;
    margin-bottom: 3rem;
    padding: 0 40px;
  }

  @media screen and (min-width: 800px) {
    margin-top: 12.8rem;
    padding: 0;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 11.1rem;
  }
`
const GoBack = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    img {
      transform: rotate(-180deg);
    }

    span {
      filter: brightness(0.7);
    }
  }

  img {
    transform: rotate(180deg);
    transition: transform 0.5s ease;
  }

  span {
    margin-left: 2.4rem;
    font-weight: bold;
    font-size: 1.4rem;
    color: var(--color-white);
    transition: filter 0.3s ease;
  }
`

export default function InvoiceInfo({ match }: any) {
  const storage = JSON.parse(localStorage.getItem('invoices') || '{}')
  const id = match.params.id
  const data = storage.filter((invoice: { id: string }) => invoice.id === id && invoice)
  const { status, setStatus, deleteModal } = useContext(InvoiceContext)

  useEffect(() => setStatus(data[0].status), [])

  return (
    <>
      <Overlay className={`${deleteModal && 'active'}`} />
      <InfoContainer>
        {deleteModal && <DeleteModal id={id} />}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <GoBack>
            <img src="/assets/icon-arrow-right.svg" alt="go back" />
            <span>Go back</span>
          </GoBack>
        </Link>
        <Topbar id={id} status={status} /> {/*Component*/}
        <MainCard id={id} data={data[0]} /> {/*Component*/}
      </InfoContainer>
      <BottomBar id={id} />
    </>
  )
}