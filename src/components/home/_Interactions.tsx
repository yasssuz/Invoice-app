import { useState } from 'react'
import styled from 'styled-components'
import { FilterBox } from './_FilterBox'

interface InteractionsProps {
  handleForm: () => void
}

export const Interactions = (props: InteractionsProps) => {
  const { handleForm } = props
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <InteractionsContainer>
      <div>
        <Title>Invoices</Title>
        <Counter>7 Invoices</Counter>
      </div>
      <LeftArea>
        <div>
          <FilterButton
            type="button"
            onClick={() => setFilterOpen(prevState => !prevState)}
          >
            Filter
            <img src="/assets/icon-arrow-down.svg" alt="open filter" />
          </FilterButton>
          {filterOpen && (
            <FilterContent>
              <FilterBox id="draft" />
              <FilterBox id="pending" />
              <FilterBox id="paid" />
            </FilterContent>
          )}
        </div>
        <AddInvoiceBtn onClick={handleForm}>
          <div>
            <img src="/assets/icon-plus.svg" alt="add icon" />
          </div>
        </AddInvoiceBtn>
      </LeftArea>
    </InteractionsContainer>
  )
}

const InteractionsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  line-height: 1.3;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 0.5rem;
`

const Counter = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.5rem;
  color: var(--color-grayish-purple);
`

const LeftArea = styled.div`
  display: flex;
  align-items: center;
`

const AddInvoiceBtn = styled.button`
  border-radius: 2.4em;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: var(--color-white);
  background: var(--color-purple);
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 9rem;
  padding: 0.5em 1.4rem 0.5em 0.6rem;
  cursor: pointer;
  transition: filter 0.2s ease;
  margin-left: 1.8rem;

  &::after {
    content: 'New';
    height: 1.2rem;

    @media screen and (min-width: 760px) {
      content: 'New Invoice'
    }
  }

  @media screen and (min-width: 760px) {
    padding: 0.68em 1.5rem 0.68em 0.8rem;
    min-width: 15rem;
  }

  div {
    width: 3.2rem;
    height: 3.2rem;
    background: var(--color-white);
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  &:hover {
    filter: brightness(1.16);
  }
`

const FilterButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-white);
  line-height: 1.7rem;
  font-size: 1.3rem;
  font-weight: bold;
  position: relative;

  img {
    margin-left: 1.2rem;
  }
`

const FilterContent = styled.div`
  position: absolute;
  margin-top: 2.3rem;
  width: 192px;
  border-radius: 0.8rem;
  background: var(--color-very-light-black);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  transform: translateX(-25%);
  padding: 2.4rem 2.4rem;
  z-index: 10;
`