import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
    padding: 0 10px;
    align-items: center;
    background-color: #fff;
`

export const LogoIcon = styled.img`
    display: block;

    @media screen and (min-width: 1060px){
        display: none;
    }
`

export const Profile = styled.img`
    width: 40px;
    height: 40px;
`