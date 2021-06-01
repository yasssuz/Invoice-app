import styled from 'styled-components'

interface StatusProps {
  status: string
}

export function StatusSwitcher(props: StatusProps) {
  const { status } = props
  return (
    <>
      {status === "paid" ? (
        <StatusPaid>Paid</StatusPaid>
      ) : (
        <>
          {status === "pending" ? (
            <StatusPending>Pending</StatusPending>
          ) : (
            <StatusDraft>Draft</StatusDraft>
          )}
        </>
      )}
    </>
  )
}

const Status = styled.div`
  min-width: 10.4rem;
  padding: 1em 0;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.6em;
  border: none;

  &::before {
    margin-right: 0.9rem;
    width: 0.8rem;
    height: 0.8rem;
    content: '';
    border-radius: 50%;
    display: block;
  }
`

const StatusPaid = styled(Status)`
  color: var(--color-green);
  background: hsla(159, 65%, 59%, 0.06);

  &::before {
    background: var(--color-green);
  }
`

const StatusPending = styled(Status)`
  color: var(--color-strong-orange);
  background: hsla(34, 100%, 50%, 0.06);

  &::before {
    background: var(--color-strong-orange);
  }
`

const StatusDraft = styled(Status)`
  color: var(--color-grayish-purple);
  background: hsla(231, 73%, 93%, 0.06);

  &::before {
    background: var(--color-grayish-purple);
  }
`