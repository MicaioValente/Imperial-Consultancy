import styled from "styled-components";
import Logo from './logo'
import Bar from './bar'
import Navbar from "./navbar";


export default function Header() {
    return (
        <Wrapper>
                <Bar/>
            <Top>
                
                <Logo />
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