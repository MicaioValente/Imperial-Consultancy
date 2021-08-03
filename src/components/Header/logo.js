import styled from "styled-components";

export default function Logo() {
    return (
        <Wrapper>
            <img src="/images/4.png" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: green;
    img {
      width: 200px;
    }
`