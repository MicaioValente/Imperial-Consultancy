import styled from "styled-components"

export default function Footer() {
  return <Wrapper>
    Meu Footer
  </Wrapper>
}

const Wrapper = styled.footer`
  border-top: 1px solid white;
  bottom: 0;
  right: 0;
  left: 0;
  background: black;
  color: rgba(255, 255, 255, 0.6);
  padding: 1rem 1rem;
  text-align: center;
`