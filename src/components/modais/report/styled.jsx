import styled from "styled-components";

export const ModalMain = styled.div`
    background-color: #00000049;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RepoDiv = styled.div`
    background-color: ${p=>p.bgc || 'black'};

    width: 30%;
    min-width: 430px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .btnClose {
        margin-left: auto;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        color: black;
        background-color: white;
        transform: scale(1.5);
        cursor: pointer;
        
        :hover {
            transform: scale(1.55);
            filter: drop-shadow(2px 2px 2px #02020239);
        }
    }

    #reportar {
        width: 90%;

        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: #F07F0F;
            margin-bottom: 10px;
        }
        p {
            width: 80%;
            text-align: center;
            font-size: 0.85rem;
            color: black;
            margin-bottom: 25px;
        }
        
        input { 
            width: 98%;
            height: 35px;
            border-radius: 7px;
            padding-left: 10px;
            box-shadow: inset 2px 4px 0px #00000052;
        }
        .nameEmail{
            width: 90%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .linkinput {
            width: 90%;
            margin-bottom: 10px;
        }
        textarea {
            width: 90% !important;
            height: 100px !important;
            border-radius: 7px;
            resize: none;
            padding: 10px;
            font-weight: 700;
            box-shadow: inset 2px 4px 0px #00000052;
        }
        .btnEnviar {
            width: 50%;
            height: 40px;
            margin: 25px 0;
            border-radius: 7px;
            cursor: pointer;
            border: 1px solid white;

            background-color: ${p=>p.bgc || 'black'};
            color: black;
            font-size: 1rem;
            font-weight: 700;
            background-color: #F07F0F;

            :hover {
                color: white;
            }
        }
    }

    @media (max-width: 440px) {
        min-width: 400px;
        .nameEmail {
            justify-content: space-between;
            div {
                width: 100%;
            }
            input {
                width: 100% !important;
                margin-right: 10px;
            }
        }
    }
    @media (max-width: 376px) {
        min-width: 350px;
    }

    @media (max-width: 321px) {
        min-width: 310px;
    }


`