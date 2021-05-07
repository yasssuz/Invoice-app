import styled from 'styled-components'

const CardContainer = styled.div`
  margin-top: 4rem;

  strong {
    font-size: 1.4rem;
    color: var(--color-white);
    line-height: 1.5rem;
    font-weight: bold;
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
  font-size: 1.5rem;
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

export function PaymentCard() {
  return (
    <CardContainer>
      <ItemsRecap>
        <Item>
          <div>
            <ItemName>Banner Design</ItemName>
            <ItemPricePerQuantity>1 x $ 156.00</ItemPricePerQuantity>
          </div>
          <TotalItemPrice>$156.00</TotalItemPrice>
        </Item>
      </ItemsRecap>
      <ItemsTotal>
        <AmountText>Amount Due</AmountText>
        <TotalAmount>$556.00</TotalAmount>
      </ItemsTotal>
    </CardContainer>
  )
}