import styled from "styled-components";

export default function Logo() {
    return (
        <Wrapper>
            <img src="/images/4.png" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
     margin-left: auto;
     margin-right: auto;
      
    img {
      width: 250px;
     
    }
`