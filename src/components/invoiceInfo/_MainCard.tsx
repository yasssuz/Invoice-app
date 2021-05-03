import React from 'react'
import styled from 'styled-components'

interface MainCardProps {
  id: string
  // description: string
  // senderAddress: {
  //   street: string
  //   city: string
  //   postCode: string
  //   country: string
  // }
  // createdAt: string
  // paymentDue: string
  // clientName: string
  // clientAddress: {
  //   street: string
  //   city: string
  //   postCode: string
  //   country: string
  // }
  // clientEmail: string
}

const Card = styled.main`
  padding: 2.4rem 24px;
  border-radius: 0.8rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  background: var(--color-light-black);
  margin-top: 1.6rem;

  span, p {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.8rem;
    color: var(--color-grayish-purple);
    display: block;
  } 

  strong {
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 2rem;
    color: var(--color-white);
  }

  address {
    font-style: normal;
  }
`


const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Id = styled.div`
  h1 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: var(--color-white);
  }

  strong {
    color: var(--color-dark-purple);
  }

  p {
    margin-top: 0.5rem;
  }
`

const SenderAddress = styled.address`
  margin: 3rem 0;

  span + span {
    margin-top: 0.5rem;
  }
`

const BottomInfo = styled.div`
`

const DatesClientInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3.2rem;
`

const Dates = styled.div`
  span {
    margin-bottom: 1.2rem;
  }

  .payment-due {
    margin-top: 3.2rem;
  }
`

const ClientInfo = styled.div`
  & > span {
    margin-bottom: 1.2rem;
  }

  div {
    margin-top: 0.8rem;

    span + span {
      margin-top: 0.5rem;
    }
  }
`

const ClientEmail = styled.div`
  span {
    margin-bottom: 1.2rem;
  }
`

export function MainCard(props: MainCardProps) {
  return (
    <Card>
      <TopInfo>
        <Id>
          <h1>
            <strong>#</strong>
            {props.id}
          </h1>
          <p>Graphic Design</p>
        </Id>
        <SenderAddress>
          <span>19 Union Terrare</span>
          <span>London</span>
          <span>E1 3EZ</span>
          <span>United Kingdom</span>
        </SenderAddress>
      </TopInfo>
      <BottomInfo>
        <DatesClientInfo> {/*change the name*/}
          <Dates>
            <span className="invoice-date">Invoice Date</span>
            <strong>21 Aug 2021</strong>
            <span className="payment-due">Payment Due</span>
            <strong>20 Sep 2021</strong>
          </Dates>
          <ClientInfo>
            <span>Bill to</span>
            <strong>Alex Grim</strong>
            <div>
              <span>84 Church Way</span>
              <span>Bradford</span>
              <span>BDI 9PB</span>
              <span>United Kingdom</span>
            </div>
          </ClientInfo>
        </DatesClientInfo>
        <ClientEmail>
          <span>Sent to</span>
          <strong>alkegrim@gmail.com</strong>
        </ClientEmail>
      </BottomInfo>
    </Card>
  )
}