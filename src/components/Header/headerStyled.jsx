import styled from 'styled-components'

export const HeaderDiv = styled.header`

    width: 100%;
    height: 57px;
    position: fixed;
    z-index: 9;
    .main {
    background-color: #0C3900;
    width: 100%;
    height: 57px;
    color: white;
    -webkit-box-shadow: 0px 7px 19px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 7px 19px -2px rgba(0,0,0,0.75);
    box-shadow: 0px 7px 19px -2px rgba(0,0,0,0.75);
    position: absolute;
    display: flex;
    justify-content: center;
    }
    .container {
        width: 99%;
        height: 57px;
        max-width: 960px;
        display: flex;
        align-items: center;
        height: 100%;
    
    }
    .hb {
        width: 35px;
        height: 35px;
    }
    .hlogo {
        width: 200px;
        height: 66px;
        transform: translateY(10px);
        margin: 0 auto;
    }
    
    .hicons {
        width: 225px;
        height: 45%;
        border-radius: 5px;
        background-color: gray;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-left: 5px;

        font-size: .87rem;
        color: #e0dfdf;
        div {
            
            width: 45%;
            display: flex;
            justify-content: space-around;
            padding-left: 5px;
        }
        
        img {
            width: 40px;
            height: 40px;
            cursor: pointer;
            :hover {
                transform: scale(1.2);
            }
        }        
    }
`