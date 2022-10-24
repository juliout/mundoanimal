import styled from 'styled-components'

export const HeaderDiv = styled.header`

    width: 100%;
    min-height: 57px;
    height: auto;
    position: fixed;
    z-index: 9;
    display: flex;
    align-items: center;
    .main {
        background-color: #0C3900;
        width: 100%;
        min-height: 57px;
        height: auto;
        color: white;
        -webkit-box-shadow: 0px 7px 19px -2px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 7px 19px -2px rgba(0,0,0,0.75);
        box-shadow: 0px 7px 19px -2px rgba(0,0,0,0.75);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        width: 99%;
        min-width: 310px;
        height: 57px;
        max-width: 960px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    
    }
    .hb {
        width: 35px;
        height: 35px;
    }
    .hlogo {
        position: absolute;
        width: 200px;
        height: 66px;
        transform: translateY(12px);
        margin-left: min(34%, 400px);
    }
    
    .hicons {
        height: 24px;
        border-radius: 5px;
        background-color: gray;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-left: 5px;

        font-size: .8rem;
        color: #e0dfdf;
        div {
            
            width: 45%;
            display: flex;
            justify-content: space-around;
            padding-left: 5px;
        }
        
        img {
            width: 38px;
            height: 38px;
            cursor: pointer;
            margin-left: 5px;
            :hover {
                transform: scale(1.2);
            }
        }        
    }
///////////////////////media //////////////
    @media (max-width: 626px){
        .main{
            padding: 40px;
            .hlogo {
                margin-top: 80px;
                margin-left: 20%;
            }
        }
    }

    @media (max-width: 426px) {
        .main {
            .container {
                min-width: 415px;
            }
            .hlogo {
                margin-left: 25%;
            }
        }
    }
    @media (max-width: 376px) {
        .main {
            .container {
                min-width: 360px;
            }
            .hlogo {
                margin-left: 20%;
            }
        }
    }

    @media (max-width: 320px) {
        .main {
            .container {
                min-width: 310px;
            }
            .hlogo {
                margin-left: 17%;
            }
        }
    }
    
`