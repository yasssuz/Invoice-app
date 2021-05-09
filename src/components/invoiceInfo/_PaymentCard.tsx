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

  @media screen and (min-width: 750px) {
    margin-top: 4.8rem;
  }

  strong {
    font-size: 1.4rem;
    color: var(--color-white);
    line-height: 1.5rem;
    font-weight: bold;
  }

  .mobileVersion {
    @media screen and (min-width: 750px) {
      display: none;
    }
  }

  .desktopVersion {
    @media screen and (max-width: 750px) {
      display: none;
    }

    @media screen and (min-width: 750px) {
      display: block;
    }
  }
`

// MOBILE

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

// DESKTOP

const ItemsTable = styled.table`
  width: 100%;
  border-radius: 0.8rem 0.8rem 0 0;
  padding: 3.2rem 3.2rem;
  background: var(--color-very-light-black);
`

const TableHead = styled.thead`
  &::after {
    content: '';
    height: 3.2rem;
    width: 0;
    display: block;
  }

  tr {
    text-align: right;

    .tableHeadFirstElement {
      text-align: left;
    }

    .tableHeadSecondElement {
      text-align: center;
    }

    th {
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 1.8rem;
      color: var(--color-grayish-purple);
    }
  }
`

const TableBody = styled.tbody`
  tr {
    text-align: right;

    .tableBodyFirstElement {
      text-align: left;
    }

    .tableBodySecondElement {
      text-align: center;
    }

    td {
      font-size: 1.45rem; 
      line-height: 1.5rem;
      color: var(--color-white);
      font-weight: bold;
    }
  }

  tr + tr td {
    padding-top: 3.1rem;
  }
`

// GLOBAL

const ItemsTotal = styled.footer`
  background: var(--color-darkest);
  padding: 2.4rem 24px;
  border-radius: 0 0 0.8rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  
  @media screen and (min-width: 750px) {
    padding: 3.1rem 32px;
  }
`
const AmountText = styled.span``

const TotalAmount = styled.strong`
  font-size: 1.8rem !important;

  @media screen and (min-width: 750px) {
    font-size: 2.5rem !important;
  }
`

export function PaymentCard({ items }: ItemsProps) {
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    items.map(item => handleTotalAmount(item))
  }, [])

  function handleTotalAmount(item: any) {
    setTotalAmount(prevState => prevState + item.total)
  }

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
      </div>
      <div className="desktopVersion">
        <ItemsTable>
          <TableHead>
            <tr>
              <th className="tableHeadFirstElement">Item Name</th>
              <th className="tableHeadSecondElement">QTY.</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <tr key={`${item.price * item.quantity * item.total}${item.name}`}>
                <td className="tableBodyFirstElement">{item.name}</td>
                <td className="tableBodySecondElement">{item.quantity}</td>
                <td>$ {item.price}</td>
                <td>$ {item.total}</td>
              </tr>
            ))}
          </TableBody>
        </ItemsTable>
      </div>
      <ItemsTotal>
        <AmountText>Amount Due</AmountText>
        <TotalAmount>$ {totalAmount}</TotalAmount>
      </ItemsTotal>
    </CardContainer>
  )
}