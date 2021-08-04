import styled from "styled-components";
import Logo from './logo'
import Contatos from './contatos'
import Navbar from "./navbar";
import Calco from "./calco";

export default function Header() {
    return (
        <Wrapper>
            <Top>
                <Calco/>
                <Logo />
                <Contatos />
            </Top>
            <Navbar />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: black;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
` 