import styled from "styled-components";
import Logo from './logo'
import Contatos from './contatos'
import Navbar from "./navbar";

export default function Header() {
    return (
        <Wrapper>
            <Top>
                <Logo />
                <Contatos />
            </Top>
            <Navbar />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: blue;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`