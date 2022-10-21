import styled from "styled-components";
const pColor = '#0C3900'
export const FooterDiv = styled.footer`
    background-color: ${pColor};
    width: 100%;
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
            height: 60%;
        }
        .texttool {
            width: 170px !important;
            font-size: 0.7rem;
            text-align: left;
        }
`