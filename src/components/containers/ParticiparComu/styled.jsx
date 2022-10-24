import styled from "styled-components";

export const PaticiparComunidade = styled.div`
    width: 100%;
    height: 240px;
    background: url('/image/join-comu-bg2.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .main {
        width: 99%;
        height: 100%;
        max-width: 960px;
        background-image: url('/image/bg2-comu.png');
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            margin-top: 130px;
            color: black;
            text-decoration: underline;
        }
    }

    @media (max-width: 750px) {
        height: 180px;
        .main {
            background-size: 90%;
            background-repeat: no-repeat;
            background-position: bottom;
        }
    }
    
    @media (max-width: 501px) {
        height: 150px;
        background-size: 100% 80%;
        .main {
            a {
                margin-top: 100px;
            }
        }
    }
    @media (max-width: 376px) {
        height: 130px;
        .main {
            background-size: 95%;
            a {
                margin-top: 100px;
                font-size: .8rem;
            }
        }
    }

`