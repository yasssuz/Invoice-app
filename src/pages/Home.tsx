import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { EmptyPage } from '../components/home/_EmptyPage'
import { Interactions } from '../components/home/_Interactions'
import { FilterProvider } from '../contexts/FilterContext'
import { InvoicesList } from '../components/home/_InvoicesList'
import { getInvoices } from '../utils/storage'
import { FormContext } from '../contexts/FormContext'
import { Form } from '../components/form/_Form'
import { Overlay } from '../components/shared/_Overlay'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const { formOpen } = useContext(FormContext)
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const invoices = getInvoices()

  useEffect(() => {
    invoices.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
  }, [invoices])

  return (
    <FilterProvider>

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
        {formOpen && (
          <FormMotion
            exit={{ x: '-100vw' }}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.65, type: 'tween', ease: 'easeInOut' }}
          >
            <Form />
          </FormMotion>
        )} {/*Component*/}
      </AnimatePresence>

      <Main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Interactions /> {/*Component*/}
        {isEmpty ? (
          <EmptyPage />  /*Component*/
        ) : (
          <InvoicesList /> /*Component*/
        )}
      </Main>
    </FilterProvider >
  )
}

const pageVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
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
    x: '-100vw',
    transition: {
      duration: 0.4
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

const Main = styled(motion.main)`
  max-width: 73rem;
  margin: 10.4rem auto 3rem;
  padding: 0 24px;
  min-height: 89vh;

  @media screen and (min-width: 760px) {
    margin-top: 13.6rem;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 7.2rem;
    padding: 0;
  }
`
