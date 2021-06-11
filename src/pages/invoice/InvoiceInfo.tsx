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
import { motion, AnimatePresence } from 'framer-motion'

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
      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Overlay />
          </motion.div>
        )} {/*Component*/}
      </AnimatePresence>

      <AnimatePresence>
        {deleteModal && (
          <motion.div
            variants={modalOvVariants}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            <Overlay />
          </motion.div>
        )} {/*Component*/}
      </AnimatePresence>

      <AnimatePresence>
        {formOpen && (
          <FormMotion
            exit={{ x: '-100vw' }}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.65, type: 'tween', ease: 'easeInOut' }}
          >
            <Form invoice={data[0]} />
          </FormMotion>
        )} {/*Component*/}
      </AnimatePresence>

      <AnimatePresence>
        {deleteModal && (
          <ModalMotion
            exit={{ scale: 0.4, opacity: 0 }}
            initial={{ scale: 0.5, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', mass: 2, damping: 10 }}
          >
            <DeleteModal handleModal={handleModal} id={id} />
          </ModalMotion>
        )}
      </AnimatePresence>

      <InfoContainer
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
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


const pageVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 3.5,
      damping: 30,
      delay: 0.4
    }
  },
  exit: {
    opacity: 0,
    x: '100vw',
    transition: {
      duration: 0.4
    }
  }
}

const modalOvVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.4,
      duration: 0.5
    }
  }
}

const FormMotion = styled(motion.div)`
  position: fixed;
  z-index: 900;
  top: 0;
  bottom: 0;
  width: 100%;

  @media screen and (min-width: 630px) {
    top: 8rem;
  }

  @media screen and (min-width: 1000px) {
    top: 0;
  }
`

const ModalMotion = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 2000;

  @media screen and (min-width: 750px) {
    margin: 0;
  }
`

const InfoContainer = styled(motion.div)`
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