import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    gap: 40px;
    padding: 0 10px;
    align-items: center;
    background-color: #fff;
`

export const LogoIcon = styled.img`
    display: block;
    width: 40px;

    @media screen and (min-width: 1060px){
        display: none;
    }
`