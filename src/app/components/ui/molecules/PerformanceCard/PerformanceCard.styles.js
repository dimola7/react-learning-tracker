import styled from "styled-components";

export const PerformanceContainer = styled.div`
    display: flex;
    justify-content: center;

        @media screen and (min-width: 980px){
            display: flex;
            justify-content: start;
        }
`
export const BigText = styled.h2`
    font-size: 21px;
`
export const ArrowDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`
export const ProgressFlex = styled.div`
    margin: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ProgressbarFlex = styled.div`
    display: flex;
      align-items: center;
      gap: 10px;
`