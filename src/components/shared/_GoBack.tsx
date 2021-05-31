import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface GoBackProps {
  onClick?: () => void
}

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    img {
      transform: rotate(-180deg);
    }

    span {
      filter: brightness(0.7);
    }
  }

  img {
    transform: rotate(180deg);
    transition: transform 0.5s ease;
  }

  span {
    margin-left: 2.4rem;
    font-weight: bold;
    font-size: 1.4rem;
    color: var(--color-white);
    transition: filter 0.3s ease;
  }
`

export const GoBack = (props: GoBackProps) => {
  const { onClick } = props
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <ContentContainer onClick={onClick} id="go-back-component">
        <img src="/assets/icon-arrow-right.svg" alt="go back" />
        <span>Go back</span>
      </ContentContainer>
    </Link>
  )
}