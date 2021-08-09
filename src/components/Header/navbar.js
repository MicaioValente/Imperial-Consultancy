import styled from 'styled-components'

export default function Navbar() {
  return <Wrapper>
  <Div>
    <a href="/">Home</a>
    <a href="/Who-are-we">Quem Somos</a>
    <a href="/history">Histórias</a>
    <a href="/services">Serviços</a>
    <a href="/products">Produtos</a>
  </Div>
    <a href="/login">LOGIN</a>
  </Wrapper>
}
const Div = styled.div`
    a{
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

const Wrapper = styled.nav`
  background: #ffd000;
  display: flex;
  justify-content: space-between;
  a{
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