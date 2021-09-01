import styled from "styled-components";

export const Button = styled.button`
    background-color: #34A853;
    color: #fff;
    width: 300px;
    height: 45px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;
    transition: 0.5s;
    font-size: 0.8rem;
    font-family: 'Mulish', sans-serif;
    font-weight: 600;
    letter-spacing: 0.8px;

    &:hover{
        background-color: #2ecc71;
    }

    @media screen and (min-width: 620px){
        width: 350px;
        height: 45px;
}
`;
