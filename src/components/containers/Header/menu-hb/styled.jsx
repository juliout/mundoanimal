import styled from "styled-components";

export const MenuHb = styled.div`
    display: ${p=> p.close ? 'flex' : 'none'};
    width: 300px;
    height: 200px;
    -webkit-box-shadow: 0px 0px 9px 0px #00000065;
    -moz-box-shadow: 0px 0px 9px 0px #00000065;
    box-shadow: 0px 0px 9px 0px #00000065;
    background-color: white;
    position: absolute;
    top: 0;
    margin-top: 55px;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;

    z-index: 999;
    nav {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    a {
        width: 100%;
        padding: 3.75px;
        border-bottom: 1px solid #e2e2e2;
        color: #0C3900;
        font-weight: 300;
        font-size: .9rem;
        :last-child {
            border-bottom: none;
        }
        :hover {
            background-color:  #0C3900;
            color: white;
            cursor: pointer;
        }
    }
    @media (min-width: 1220px) {
        transform: translateX(-130px)
    }
    @media (min-width: 1670px) {
        transform: translateX(-280px)
    }
    @media (max-width: 624px) {
        margin-top: 85px;
    }       
`