import Header from "../Header"
import Container from "./styles"
import ContentContainer from "./styles"
import Logo from "./styles"

function Layout({children}) {
    return(
         <>
         <Header>
             <Logo/>
             <Container>               
                 <ContentContainer>
                     
                 </ContentContainer>
             </Container>
         </Header>
         </>
        )
    
}
export default Layout