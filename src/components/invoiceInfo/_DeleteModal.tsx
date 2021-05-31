import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StorageContext } from '../../contexts/StorageContext'
import { GrayBtn, RedBtn } from '../shared/_Buttons'

interface DeleteModalProps {
  id: string
  handleModal: () => void
}

const CardContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  border-radius: 0.8rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  background: var(--color-light-black); 
  margin: 0 24px;
  padding: 3.4rem 34px;
  z-index: 2000;

  @media screen and (min-width: 750px) {
    left: 50%;
    right: unset;
    transform: translate(-50%, -50%);
    width: 48rem;
  }
`

const Title = styled.h3`
  color: var(--color-white);
  font-size: 2rem;
  line-height: 3.2rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`

const Message = styled.p`
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-weight: 500;
  color: var(--color-semi-gray);
`

const ButtonsArea = styled.div`
  margin-top: 2.4rem;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  min-height: 4.8rem;

  .cancelBtn {
    width: 35.3%;
    margin-right: 1rem;
    min-width: 9.1rem;
  }

  .deleteBtn {
    width: 34.5%;
    min-width: 8.9rem;
    height: auto;
    overflow: hidden;
     
    a {
      text-decoration: none;
      color: var(--color-white);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
`


export function DeleteModal(props: DeleteModalProps) {
  const { deleteInvoice } = useContext(StorageContext)
  const { id, handleModal } = props

  return (
    <CardContainer>
      <Title>Confirm Deletion</Title>
      <Message>Are you sure you want to delete invoice #{id}? This action cannot be undone.</Message>
      <ButtonsArea>
        <GrayBtn
          type="button"
          className="cancelBtn"
          onClick={handleModal}>
          Cancel
        </GrayBtn>
        <RedBtn
          type="button"
          className="deleteBtn"
          onClick={() => {
            handleModal()
            deleteInvoice(id)
          }}>
          <Link to="/">
            Delete
          </Link>
        </RedBtn>
      </ButtonsArea>
    </CardContainer>
  )
}