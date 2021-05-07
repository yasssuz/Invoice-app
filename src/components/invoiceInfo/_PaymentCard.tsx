import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface ItemsProps {
  items: Array<{
    name: string
    quantity: number
    price: number
    total: number
  }>
}

const CardContainer = styled.div`
  margin-top: 4rem;

  strong {
    font-size: 1.4rem;
    color: var(--color-white);
    line-height: 1.5rem;
    font-weight: bold;
  }

  .mobileVersion {
    @media screen and (min-width: 650px) {
      display: none;
    }
  }

  .desktopVersion {
    @media screen and (max-width: 650px) {
      display: none;
    }

    @media screen and (min-width: 650px) {
      display: block;
    }
  }
`

const ItemsRecap = styled.div`
  padding: 2.4rem 24px;
  background: var(--color-very-light-black);
  border-radius: 0.8rem 0.8rem 0 0;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 2.4rem;
  }
`

const ItemName = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: var(--color-white);
  line-height: 1.5rem;
  font-weight: bold;
`

const ItemPricePerQuantity = styled.strong`
  color: var(--color-semi-gray) !important;
`

const TotalItemPrice = styled.strong``

const ItemsTotal = styled.footer`
  padding: 2.4rem 24px;
  background: var(--color-darkest);
  border-radius: 0 0 0.8rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const AmountText = styled.span``

const TotalAmount = styled.strong`
  font-size: 1.8rem !important;
`

export function PaymentCard({ items }: ItemsProps) {
  const itemsData = items
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    items.map(item => setTotalAmount(prevAmount => prevAmount + item.total))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CardContainer>
      <div className="mobileVersion">
        <ItemsRecap>
          {items.map(item => (
            <Item key={`${item.price * item.quantity * item.total}${item.name}`}>
              <div>
                <ItemName>{item.name}</ItemName>
                <ItemPricePerQuantity>
                  {item.quantity} x $ {item.price}
                </ItemPricePerQuantity>
              </div>
              <TotalItemPrice>$ {item.total}</TotalItemPrice>
            </Item>
          ))}
        </ItemsRecap>
        <ItemsTotal>
          <AmountText>Amount Due</AmountText>
          <TotalAmount>$ {totalAmount}</TotalAmount>
        </ItemsTotal>
      </div>
      <div className="desktopVersion">
        <strong>HELLOOOO</strong>
      </div>
    </CardContainer>
  )
}