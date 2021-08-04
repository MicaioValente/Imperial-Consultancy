import styled from "styled-components";
import { faFacebookF,faGithub,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default function Contatos() {
    return (
        <Wrapper>
            
           <a href="https://facebook.com" target="_blank"> <FontAwesomeIcon icon={[fab, faFacebookF]} /></a>
            <a href="https://www.github.com/micaiovalente" target="_blank"><FontAwesomeIcon icon={[fab, faGithub]} /></a>
            <a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={[fab, faInstagram]} /></a>
            <a href="https://www.whatsapp.com/" target="_blank"><FontAwesomeIcon icon={[fab, faWhatsapp]} /></a>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    width: 200px;
    height: 200px;
    .icone{
        color: white;
        font-size: 25px;
        margin: 12px;
    }
    
`