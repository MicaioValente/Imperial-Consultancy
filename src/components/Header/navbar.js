import styled from 'styled-components'

export default function Navbar() {
  return <Wrapper>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </Wrapper>
}

const Wrapper = styled.nav`
  background: black;
  a {
    padding: 1rem;
    display: inline-block;
    color: white;
    text-transform: uppercase;
    font-family: 'Times New Roman', Times, serif;
    text-decoration: none;
    :hover {
      background: rgba(225, 255, 255, .2)
    }
  }
`

