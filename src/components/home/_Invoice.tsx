import { FC, memo } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { formatMoneyAmount } from "../../utils/formatters"
import { StatusSwitcher } from "../shared/_Status"

interface InvoiceProps {
  id: string
  client: string
  creationDate: string
  amount: number
  status: string
}

const InvoiceContainer = styled.li`
  padding: 2.4rem 24px;
  border-radius: 1em;
  background: var(--color-light-black);
  transition: transform 0.2s ease;
  cursor: pointer;
  margin-top: 1.6rem;

  &:hover {
    border: 1px solid var(--color-purple);
    transform: scale(1.02);
    padding: 2.3rem 24px;
  } 

  &:focus {
    border: 1px solid var(--color-purple);
    transform: scale(1.02);
    padding: 2.3rem 24px;
  }

  .desktop-version {
    display: none;
  }

  @media screen and (min-width: 750px) {
    padding: 1.9rem 24px;

    &:hover {
      border: 1px solid var(--color-purple);
      transform: scale(1.04);
      padding: 1.8rem 24px;
    } 

    &:focus {
      border: 1px solid var(--color-purple);
      transform: scale(1.04);
      padding: 1.8rem 24px;
    }

    .mobile-version {
      display: none;
    }

    .desktop-version {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-left: 2rem;
      }
    }
  }
`

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`

const Id = styled.h2`
  font-size: 1.3rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: var(--color-white);

  span {
    color: var(--color-dark-purple);
  }
`

const Receiver = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--color-white);
`

const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Date = styled(Receiver)`
  color: var(--color-grayish-purple);
`

const Amount = styled.h3`
  font-size: 1.7rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: var(--color-white);
  margin-top: 0.8rem;

  @media screen and (min-width: 750px) {
    margin: 0;
  }
`

const IdDate = styled.div`
  width: 19rem;
  display: flex;
  justify-content: space-between;
  margin-right: 3.7rem;
`

const ReceiverAmount = styled.div`
  width: 24rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 4rem;
`

export const Invoice = memo((props: InvoiceProps) => {
  const { id, client, creationDate, amount, status } = props

  return (
    <Link to={`/invoices/${id}`} style={{ textDecoration: 'none' }}>
      <InvoiceContainer>
        <div className="mobile-version">
          <About>
            <Id><span>#</span>{id}</Id>
            <Receiver>{client}</Receiver>
          </About>
          <Information>
            <div>
              <Date>{creationDate}</Date>
              <Amount>$ {amount}</Amount>
            </div>
            <StatusSwitcher status={status} />
          </Information>
        </div>
        <div className="desktop-version">
          <IdDate>
            <Id><span>#</span>{id}</Id>
            <Date>{creationDate}</Date>
          </IdDate>
          <ReceiverAmount>
            <Receiver>{client}</Receiver>
            <Amount>$ {formatMoneyAmount(amount)}</Amount>
          </ReceiverAmount>
          <StatusSwitcher status={status} />
          <img src="/assets/icon-arrow-right.svg" alt="icon arrow" />
        </div>
      </InvoiceContainer>
    </Link>
  )
})