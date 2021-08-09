import styled from "styled-components";
import { Facebook,Github,Linkedin,Whatsapp} from "@styled-icons/boxicons-logos";



export default function Contatos() {
    return (
        <Wrapper>     
            <LinkSocial href="https://facebook.com" target="_blank" > <Facebook /> </LinkSocial>
            <LinkSocial href="https://www.github.com/micaiovalente" target="_blank"> <Github/></LinkSocial>
            <LinkSocial href="https://www.linkedin.com/" target="_blank"><Linkedin/></LinkSocial>
            <LinkSocial href="https://www.whatsapp.com/" target="_blank"> <Whatsapp/></LinkSocial>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    width: 170px;
    height: 30px;
    align-items: center;
    margin-left: auto;
`
const LinkSocial = styled.a`
font-size: 0;
svg{
    width: 30px;
    color: white;
    margin-left: 5px;

}

`

