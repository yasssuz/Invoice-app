import styled from 'styled-components'
import { GrayBtn, RedBtn, PurpleBtn } from '../shared/_Buttons'

const BottomBarContainer = styled.footer`
  padding: 2.2rem 24px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: var(--color-light-black);
  min-height: 9.1rem;
  margin-top: 5.6rem;
  border-radius: 3rem 3rem 0 0;

  @media screen and (min-width: 720px) {
    display: none;
  }

  button {
    font-size: 13px;
  }

  .grayBtn {
    width: 22.6%;
  }

  .redBtn {
    width: 27.3%;
  }

  .purpleBtn {
    width: 45.6%;
  }
`

export function BottomBar() {
  return (
    <BottomBarContainer>
      <GrayBtn className="grayBtn">Edit</GrayBtn>
      <RedBtn className="redBtn">Delete</RedBtn>
      <PurpleBtn className="purpleBtn">Mark as paid</PurpleBtn>
    </BottomBarContainer>
  )
}