import styled from "styled-components";

export const BigNumber = styled.h1`
    color: #63A568;
    font-size: 50px;
    margin: 20px 0;
`

export const Text = styled.p`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
`