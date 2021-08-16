import {Github} from "@styled-icons/boxicons-logos";
import {Wrapper,Atendimento,Divi,IconDiv,LinkSocial } from './styles'



export default function Contatos() {
  return <Wrapper>
  <Divi>
    <Atendimento><h4>ATENDIMENTO</h4><p>(47)999999999</p></Atendimento>
    <Atendimento><h4>EMAIL</h4><p>imperial@consultancy.com.br</p></Atendimento>
  </Divi>
  <IconDiv><LinkSocial href="https://www.github.com/micaiovalente" target="_blank"><Github/></LinkSocial></IconDiv>
  <p>© 2021 Imperial Consultancy</p>
  </Wrapper>
}

        
