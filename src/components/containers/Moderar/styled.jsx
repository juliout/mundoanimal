import styled from "styled-components";
const orangeBtn = '#F2902C'


export const ModerarDiv = styled.div`
    width: 100%;
    height: 187px;
    background: url('/image/bg-be-moderator.png');
    background-size: 100% 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    margin-bottom: 10px;

    .main {
        width: 99%;
        max-width: 960px;
        height: 100%;
        background: url('/image/be-moderator.png');
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        
        div {
            text-align: center;
            margin-right: 10%;
        }

        h1 {
            font-size: 1.3rem;
        }
        a {
            color: ${orangeBtn};
            text-decoration: underline;
            :hover {
                color: black;
            }
        }
    }

    @media (max-width: 425px) {
        .main {
            div {
                margin: 0 auto;
            }
            h1, a {
                width: 300px;
                background-color: #ffffff76;
            }
        }
    }
`