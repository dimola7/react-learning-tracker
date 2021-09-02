import styled from "styled-components";

export const DashboardContainer = styled.div`
    margin: 0;
    min-height: 92vh;
    overflow-y: hidden;
`
export const DashboardBody = styled.div`
    display: grid;
    padding: 30px 0;
    grid-gap: 30px;

        @media screen and (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
            margin: 30px;
        }
`