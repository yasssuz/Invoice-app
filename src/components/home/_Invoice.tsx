import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { formatMoneyAmount } from "../../utils/formatters"

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

const Status = styled.div`
  min-width: 10.4rem;
  padding: 1em 0;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.6em;

  &::before {
    margin-right: 0.9rem;
    width: 0.8rem;
    height: 0.8rem;
    content: '';
    border-radius: 50%;
    display: block;
  }
`

const StatusPaid = styled(Status)`
  color: var(--color-green);
  background: hsla(159, 65%, 59%, 0.06);

  &::before {
    background: var(--color-green);
  }
`

const StatusPending = styled(Status)`
  color: var(--color-strong-orange);
  background: hsla(34, 100%, 50%, 0.06);

  &::before {
    background: var(--color-strong-orange);
  }
`

const StatusDraft = styled(Status)`
  color: var(--color-grayish-purple);
  background: hsla(231, 73%, 93%, 0.06);

  &::before {
    background: var(--color-grayish-purple);
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

export const Invoice: React.FC<InvoiceProps> = (props) => {
  return (
    <Link to={`/invoices/${props.id}`} style={{ textDecoration: 'none' }}>
      <InvoiceContainer>
        <div className="mobile-version">
          <About>
            <Id><span>#</span>{props.id}</Id>
            <Receiver>{props.client}</Receiver>
          </About>
          <Information>
            <div>
              <Date>{props.creationDate}</Date>
              <Amount>$ {props.amount}</Amount>
            </div>
            {props.status === "paid" ? (
              <StatusPaid>Paid</StatusPaid>
            ) : (
              <>
                {props.status === "pending" ? (
                  <StatusPending>Pending</StatusPending>
                ) : (
                  <StatusDraft>Draft</StatusDraft>
                )}
              </>
            )}
          </Information>
        </div>
        <div className="desktop-version">
          <IdDate>
            <Id><span>#</span>{props.id}</Id>
            <Date>{props.creationDate}</Date>
          </IdDate>
          <ReceiverAmount>
            <Receiver>{props.client}</Receiver>
            <Amount>$ {formatMoneyAmount(props.amount)}</Amount>
          </ReceiverAmount>
          {props.status === "paid" ? (
            <StatusPaid>Paid</StatusPaid>
          ) : (
            <>
              {props.status === "pending" ? (
                <StatusPending>Pending</StatusPending>
              ) : (
                <StatusDraft>Draft</StatusDraft>
              )}
            </>
          )}
          <img src="/assets/icon-arrow-right.svg" alt="icon arrow" />
        </div>
      </InvoiceContainer>
    </Link>
  )
}