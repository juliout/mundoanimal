import styled from "styled-components";
const pColor = '#0C3900'
export const FooterDiv = styled.footer`
    background-color: ${pColor};
    width: 100%;
    min-width: 320px;
    height: 51px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;

    .reservDiv {

        display: flex;
        align-items: center;

        h3 {
            font-size: 13px;
            display: flex;
            align-items: center;
        }

        .cIcon {
            width: 15px;
            height: 15px;
            margin: 0 10px;
        }
    }
        .imglgpd{
            width: 75px;
            height: 30px;
            position: absolute;
            right: 0;
            margin-right: 10px;
            display: none;
        }
        .texttool {
            width: 170px !important;
            font-size: 0.7rem;
            text-align: left;
        }
        @media (max-width: 749px) {
            .imglgpd {
                display: flex;
            }
        }

        @media (max-width: 645px) {
            margin-bottom: 76px;
            .imglgpd {
                display: none;
            }
                        
        }
        @media (max-width: 465px) {
            margin-bottom: 128px;
        }
        @media (max-width: 320px) {
            h3 {
                width: 90%;
                font-size: .9rem;
                margin: 0 auto;
            }
        }
`