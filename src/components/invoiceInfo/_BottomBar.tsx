import { memo } from 'react'
import styled from 'styled-components'
import { GrayBtn, RedBtn, PurpleBtn } from '../shared/_Buttons'

interface BottomBarProps {
  id: string
  status: string
  handleModal: () => void
  setPaid: () => void
}

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

  .large {
    width: 48%;
  }
`

export const BottomBar = memo((props: BottomBarProps) => {
  return (
    <BottomBarContainer>
      <GrayBtn
        type="button"
        className={`grayBtn ${props.status === 'pending' ? '' : 'large'}`}
        onClick={() => console.log('editing feature not available')}>
        Edit
      </GrayBtn>

      <RedBtn
        type="button"
        className={`redBtn ${props.status === 'pending' ? '' : 'large'}`}
        onClick={props.handleModal}>
        Delete
      </RedBtn>

      {props.status === 'pending' && (
        <PurpleBtn
          type="button"
          className="purpleBtn"
          onClick={props.setPaid}>
          Mark as paid
        </PurpleBtn>
      )}
    </BottomBarContainer>
  )
})