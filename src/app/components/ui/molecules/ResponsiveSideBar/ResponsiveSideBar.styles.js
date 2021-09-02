import styled from "styled-components";

export const Nav = styled.div`
    display: block;
    margin-top: 5px;
    display: flex;
    gap: 20px;
    align-items: center;
    background-color: #fff;
    padding: 10px 10px;

    @media screen and (min-width: 620px){
        gap: 40px;
        padding: 10px 50px;
    }
    @media screen and (min-width: 1060px){
        display: none;
    }
`
export const IconDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`