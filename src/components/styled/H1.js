import styled from 'styled-components'
import almaBorder from '../../images/alma-border.svg'

export default styled.h1`
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 16px;
  font-size: 12px;
  color: #AF875D;
  border-width: 32px;
  border: 32px solid;
  border-image: url(${almaBorder}) 32 stretch;
  font-family: 'Gothic A1', sans-serif;

  @media (min-width: 50rem) {
    font-size: calc(24px + (48 - 24) * ((100vw - 300px) / (1600 - 300)));;
  }
`