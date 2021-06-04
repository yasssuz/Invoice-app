import styled from 'styled-components'

interface FilterBoxProps {
  id: string
  func: () => void
  state: boolean
}

export function FilterBox(props: FilterBoxProps) {
  const { id, func, state } = props

  return (
    <Container>
      {state ? (
        <CheckBox onClick={func} type="checkbox" id={id} name={id} defaultChecked />
      ) : (
        <CheckBox onClick={func} type="checkbox" id={id} name={id} />
      )}
      <small>{id}</small>
    </Container>
  )
}

const Container = styled.div`  
  display: flex;
  align-items: center;

  & + & {
    margin-top: 1.6rem;
  }

  small {
    color: var(--color-white);
    line-height: 1.7rem;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: capitalize;
  }
`

const CheckBox = styled.input`
  margin-right: 1.3rem;
  border: 0;
  background: var(--color-light-black);
  appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-purple);
  }

  &:checked {
    background: var(--color-purple);

    &:hover {
      border: none;
    }

    &:after {
      content: url('/assets/icon-check.svg');
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`