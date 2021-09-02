import styled from "styled-components";

export const LoginContainer = styled.div`
    @media screen and (min-width: 860px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
`
export const Left = styled.div`
    @media screen and (min-width: 860px) {
        height: 100vh;
        background-color: #242424;
    }
`
export const Right = styled.div`
    height: 100vh;
    display: flex;
    gap: 25px;
    flex-direction: column;
    place-items: center;
    place-content: center;
`
export const Text = styled.h4`
    text-align: center;
    line-height: 1.8;
`