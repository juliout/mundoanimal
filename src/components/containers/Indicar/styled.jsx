import styled from "styled-components";
const darkGreen = '#0C3900'
const orangeBtn = '#F2902C'


export const IndicarBannerDiv = styled.div`
    
    width: 100%;
    min-height: 160px;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('/image/indique-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;

    .main {
        width: 100%;
        max-width: 960px;
        display: flex;
        align-items: center;
        span {
            width: 50%;
            background-color: ${darkGreen};
            color: white;
            padding-left: 10px;
        }
        button {
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            min-width: 160px;
            max-width: 250px;
            height: 40px;

            border-radius: 8px;
            margin-left: auto;
            margin-right: 10px;
            background-color: ${orangeBtn};
            font-size: .9rem;
            font-weight: 700;
            cursor: pointer;
        }
    }
    @media (max-width: 501px){
        .main {
            span {
                width: 60%;
                font-size: 80%;
            }
        }
    }    
`