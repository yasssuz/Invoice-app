import { useEffect, useState, useCallback, useContext } from 'react'
import styled from 'styled-components'
import { MainCard } from '../../components/invoiceInfo/_MainCard'
import { Topbar } from '../../components/invoiceInfo/_TopBar'
import { BottomBar } from '../../components/invoiceInfo/_BottomBar'
import { DeleteModal } from '../../components/invoiceInfo/_DeleteModal'
import { GoBack } from '../../components/shared/_GoBack'
import { changeToPaidInvoice, getInvoices } from '../../utils/storage'
import { Form } from '../../components/form/_Form'
import { FormContext } from '../../contexts/FormContext'
import { Overlay } from '../../components/shared/_Overlay'


interface InvoiceInfoProps {
  match: {
    params: {
      id: string;
    }
  }
}

export default function InvoiceInfo(props: InvoiceInfoProps) {
  const { formOpen } = useContext(FormContext)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('')
  const storage = getInvoices()
  const { match } = props
  const id = match.params.id
  const data = storage.filter((invoice: { id: string }) => invoice.id === id && invoice)

  useEffect(() => setStatus(data[0].status), [data])

  const handleModal = useCallback(() => {
    setDeleteModal(prevState => !prevState)
  }, [])

  const setPaid = useCallback(() => {
    setStatus('paid')
    changeToPaidInvoice(id)
  }, [id])

  return (
    <>
      {formOpen && <Overlay />} {/*Component*/}
      {formOpen && <Form invoice={data[0]} />} {/*Component*/}
      {deleteModal && <Overlay />} {/*Component*/}
      <InfoContainer>
        {deleteModal && <DeleteModal handleModal={handleModal} id={id} />}
        <GoBack /> {/*Component*/}
        <Topbar
          status={status}
          handleModal={handleModal}
          setPaid={setPaid}
        /> {/*Component*/}
        <MainCard id={id} data={data[0]} /> {/*Component*/}
      </InfoContainer>
      <BottomBar
        status={status}
        handleModal={handleModal}
        setPaid={setPaid}
      /> {/*Component*/}
    </>
  )
}

const InfoContainer = styled.div`
  margin: 10.4rem auto 0;
  max-width: 75rem;
  padding: 0 24px;
  transition: padding 0.3s ease;

  @media screen and (min-width: 720px) {
    margin-top: 12.8rem;
    margin-bottom: 3rem;
    padding: 0 40px;
  }

  @media screen and (min-width: 800px) {
    margin-top: 12.8rem;
    padding: 0;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 11.1rem;
  }
`