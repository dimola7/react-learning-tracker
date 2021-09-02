import styled from "styled-components";

export const SmallCard = styled.div`
    background: #fff;
    border: 1px solid #fff;
    padding: 20px 15px;
    width: 150px;
    height: 220px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
    transform: scale(1.04);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.03);
}
`

export const BigCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    background: #fff;
    font-size: 12px;
    border: 1px solid #fff;
    padding: 15px 15px;
    width: 250px;
    height: 500px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);

    @media screen and (min-width: 620px){
        width: 300px;
    }
`