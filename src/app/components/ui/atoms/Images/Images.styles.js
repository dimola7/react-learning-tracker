import styled from "styled-components";

export const Icon = styled.img`
    width: 45px;
`

export const Image = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    cursor: pointer;
`