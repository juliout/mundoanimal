import styled from "styled-components";
const darkGreen = '#0C3900'

export const BannerContainer = styled.section`
    
    width: 100%;
    height: 303px;
    margin-top: 57px;
    .banner {
        width: 100%;
        max-width: 960px;
        height: 100%;
        background-image: url('/image/banner-index.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .rpbanner {
        
        width: 100%;
        min-height: 68px;
        display: flex;
        align-items: flex-end;
        margin-bottom: 20px;

        h1{
            width: 50%;
            background-color: ${darkGreen};
            padding: 5px 0;
            font-size: 1.3rem;
            font-weight: 700;
            color: white;
            padding-left: 10px;
            line-height: 1.7rem;
            display: flex;
            align-items: center;
            box-shadow: 3px 3px 8px 1px rgb(98 37 181 / 55%)
        }

        button {
            width: 30%;
            max-width: 250px;
            height: 50px;
            font-size: 1.1rem;
            font-weight: 700;
            margin-left: auto;
            margin-right: 5%;
            border-radius: 5px;
            
            -webkit-box-shadow: 2px 3px 0px 1px rgba(184,184,184,1);
            -moz-box-shadow: 2px 3px 0px 1px rgba(184,184,184,1);
            box-shadow: 2px 3px 0px 1px rgba(184,184,184,1);ow: 3px 4px 0px 1px rgba(184,184,184,1);
            :hover {
                cursor: pointer;
                box-shadow: none;
                margin-bottom: -5px;
                margin-right: 4%;
            }
        }
    }

    @media (max-width: 425px) {
        .rpbanner {
            h1 {
                width: 60%;
                font-size: 1.1rem;
            }
            button {
                font-size: 1rem;
            }
        }
    }
    @media (max-width: 375px) {
        .rpbanner {
            h1 {
                font-size: .8rem;
            }
            button {
                font-size: .8rem;
            }
        }
    }
   
`