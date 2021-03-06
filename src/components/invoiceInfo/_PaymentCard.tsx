import { useEffect, useState } from "react";
import styled from "styled-components";
import { formatMoneyAmount } from "../../utils/formatters";

interface ItemsProps {
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
}

export function PaymentCard(props: ItemsProps) {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const { items } = props;

  useEffect(() => {
    items.forEach(item => {
      const itemTotal = String(item.total).replace(/,/g, "");
      setTotalAmount(prevState => Number(itemTotal) + prevState);
    });
  }, [items]);

  return (
    <CardContainer>
      <div className='mobileVersion'>
        <ItemsRecap>
          {items.map(item => (
            <Item key={`${item.price * item.quantity}${item.name}`}>
              <div>
                <ItemName>{item.name}</ItemName>
                <ItemPricePerQuantity>
                  {item.quantity} x $ {formatMoneyAmount(item.price)}
                </ItemPricePerQuantity>
              </div>
              <TotalItemPrice>$ {formatMoneyAmount(item.total)}</TotalItemPrice>
            </Item>
          ))}
        </ItemsRecap>
      </div>
      <div className='desktopVersion'>
        <ItemsTable>
          <TableHead>
            <tr>
              <th className='tableHeadFirstElement'>Item Name</th>
              <th className='tableHeadSecondElement'>QTY.</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <tr key={`${item.price * item.quantity}${item.name}`}>
                <td className='tableBodyFirstElement'>{item.name}</td>
                <td className='tableBodySecondElement'>{item.quantity}</td>
                <td>$ {formatMoneyAmount(Number(item.price))}</td>
                {String(item.total) === "100" ? (
                  <td>$ {item.total}.00</td>
                ) : (
                  <td>$ {item.total}</td>
                )}
              </tr>
            ))}
          </TableBody>
        </ItemsTable>
      </div>
      <ItemsTotal>
        <AmountText>Amount Due</AmountText>
        <TotalAmount>$ {formatMoneyAmount(totalAmount)}</TotalAmount>
      </ItemsTotal>
    </CardContainer>
  );
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
`;

// MOBILE

const ItemsRecap = styled.div`
  padding: 2.4rem 24px;
  background: var(--color-very-light-black);
  border-radius: 0.8rem 0.8rem 0 0;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 2.4rem;
  }
`;

const ItemName = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: var(--color-white);
  line-height: 1.5rem;
  font-weight: bold;
`;

const ItemPricePerQuantity = styled.strong`
  color: var(--color-semi-gray) !important;
`;

const TotalItemPrice = styled.strong`
  color: white !important;
`;

// DESKTOP

const ItemsTable = styled.table`
  width: 100%;
  border-radius: 0.8rem 0.8rem 0 0;
  padding: 3.2rem 3.2rem;
  background: var(--color-dif-very-light-black);
`;

const TableHead = styled.thead`
  &::after {
    content: "";
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
`;

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
`;

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
`;
const AmountText = styled.span`
  color: white !important;
`;

const TotalAmount = styled.strong`
  font-size: 1.8rem !important;
  color: white !important;

  @media screen and (min-width: 750px) {
    font-size: 2.5rem !important;
  }
`;
