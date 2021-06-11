import styled from 'styled-components'


export function EmptyPage() {
  return (
    <ContentContainer>
      <Illustration src="/assets/illustration-empty.svg" alt="page empty" />
      <Title>There is nothing here</Title>
      <Description>
        Create an invoice by clicking the
        <strong className="mobile"> New </strong>
        <strong className="desktop"> New Invoice </strong>
        button and get started
      </Description>
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media screen and (min-width: 750px) {
    top: 50%;
  }
`

const Illustration = styled.img`
  width: 242px;
  height: 200px;
  margin-bottom: 4rem;
`

const Title = styled.h2`
  color: var(--color-white);
  font-size: 2rem;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 2.4rem;
`

const Description = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--color-grayish-purple);
  margin: auto;
  max-width: 23ch;

  @media screen and (max-width: 750px) {
    .desktop {
      display: none;
    }
  }

  @media screen and (min-width: 750px) {
    .mobile {
      display: none;
    }
  }
`