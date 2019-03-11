import styled from 'styled-components'

export default styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-columns: repeat(3, 1fr);
  background: white;

  @media (min-width: 50rem) {
    grid-template-rows: 20vh 60vh 20vh;
    grid-template-columns: 1fr 3fr;
  }
`;