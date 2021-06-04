import styled from 'styled-components'

const OverLay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: hsla(0, 0%, 0%, 0.5);
  z-index: 10;
`

export function Overlay() {
  return <OverLay />
}