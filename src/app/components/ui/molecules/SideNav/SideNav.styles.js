import styled from "styled-components";

export const SideBar = styled.div`
    display: grid;
    height: 100vh;
    background: #fff;
    padding: 0 30px;
    place-content: space-between;
`
export const NavTop = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 90px;
`
export const NavBottom = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 30px;
`
export const IconDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`