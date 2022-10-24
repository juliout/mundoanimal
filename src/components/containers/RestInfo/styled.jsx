import styled from "styled-components";

const Purple = '#6225B5'

export const RestInfoDiv = styled.div`
    
    width: 100%;
    min-height: 220px;
    height: auto;

    display: flex;
    justify-content: center;

    .main {
        width: 99%;
        max-width: 960px;
        
        min-height: 220px;
        height: auto;

        display: flex;
        flex-direction: column;
        
    }
    .restTop {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        width: 100%;
        min-height: 140px;
        
        border-bottom: 2px ${Purple} solid;


    }
    .list {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 30%;
        max-width: 960px;
    }
    .hidden {
            display: none;
            opacity: 0;
    }

    .hiddenmenu {
        display: none;
        font-size: 600;
        font-size: 0.9rem;
    }

    .divLeft {
        display: flex;
        align-items: center;
        max-width: 250px;
        justify-content: space-around;
        a {
            font-size: 1.1rem;
            margin-left: 15px;
        }
    }
    .bot {    
        margin-top: 10px;
        font-weight: 700;
        font-size: 1rem;
        width: 47% ;
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        
    }
    .restLogo {
        width: 100px;
        height: 22px;
        margin-left: 10px;
    }

        
    .restBot {
        width:100%;
        min-height: 80px;
        display: flex;
        align-items: center;
        padding-right: 5px;
        margin-top: 10px;
        justify-content: space-between;
    }
    .left {
        display: flex;
        
        div {
            display: flex;
            align-items: center;
            margin-right: 10px;

            span {
                font-family: 'Poppins', sans-serif;
                font-size: 0.7rem;
                font-weight: 700;
                margin-left: 10px;
            }
        }
        .lIcon {
            width: 25px;
            height: 25px;
            margin-right: 6px;
        }
    }

    .right {
        display: flex;
        align-items: center;
        div {
            display: flex;
            align-items: center;
        }
        span {
            font-size: 0.8rem;
            font-weight: 700;
        }
        .socialIcons {
            width: 35px;
            height: 35px;
            margin-left: 10px;
            :hover {
                transform: scale(1.3);
                cursor: pointer;
            }
        }
    }

    @media (max-width: 620px) {
        .divLeft { 
            height: 100%;
            a {
                font-size: .9rem;
                margin-left: 0;
            }
        }

        .restBot {
            flex-direction: column;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 460px) {
        .restTop {
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;
        }
        .list {
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 0;
            height: 100%;
            width: 50%;
            padding-top: 5px;
        }
        .bot {
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            height: 90%;
            
            margin-left: 10px;
        }
        .hidden {
            display: flex;
            opacity: 1;
        }
        .hiddenmenu {
            display: flex;
        }
    }
    @media (max-width: 350px) {
        .list {

            width: 70%;
        }

       .right {
        flex-direction: column;
        width: 40%;
        span {
            margin: 10px;
        }
       }
    }
`