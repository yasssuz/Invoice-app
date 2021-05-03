import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Topbar } from '../components/invoiceInfo/_TopBar'

const InfoContainer = styled.div`
  margin: 10.4rem auto 0;
  max-width: 75rem;
  padding: 0 24px;
  transition: padding 0.3s ease;

  @media screen and (min-width: 720px) {
    margin-top: 12.8rem;
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
  console.log(match)
  return (
    <InfoContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <GoBack>
          <img src="/assets/icon-arrow-right.svg" alt="go back" />
          <span>Go back</span>
        </GoBack>
      </Link>
      <Topbar status="pending" /> {/*Component*/}
    </InfoContainer>
  )
}