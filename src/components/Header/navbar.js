import styled from 'styled-components'

export default function Navbar() {
  return <Wrapper>
    <a href="/">Home</a>
    <a href="/Who-are-we">Quem Somos</a>
    <a href="/history">Histórias</a>
    <a href="/services">Serviços</a>
    <a href="/products">Produtos</a>
    <a href="/login">LOGIN</a>
  </Wrapper>
}

const Wrapper = styled.nav`
  background: #ffd000;
  a {
    padding: 1rem;
    display: inline-block;
    color: black;
    text-transform: uppercase;
    font-family: 'Times New Roman', Times, serif;
    text-decoration: none;
    :hover {
      background: rgba(225, 255, 255, .2)
    }
  }
`

