import styled from 'styled-components'

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

export const DesDiv = styled.div`
    background-color: ${p=>p.bgc || 'black'};
    width: 30%;
    min-width: 430px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;


    .btnClose {
        margin-left: auto;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        color: black;
        background-color: white;
        transform: scale(1.5);
        cursor: pointer;
        filter: drop-shadow(2px 2px 2px #02020239);
        :hover {
            transform: scale(1.55);
        }
    }

    #descadastrar {
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
            font-size: 0.9rem;
            color: black;
            margin-bottom: 10px;
        }

        .firstDiv {

            width: 95%;
            display: flex;
            flex-direction: column;

            label {
                color: black;
                margin-bottom: 5px;
            }
            
            input{
                height: 35px;
                border-radius: 7px;
                width: 100%;
                box-shadow: inset 2px 4px 0px #00000052;
            }
            
            input[type=date] {
                width: 70%;
                padding-left: 10px;
                box-shadow: inset 2px 4px 0px #00000052;
            }
            .top {
                display: flex;
                width: 100%;
                justify-content: space-between;
                margin-bottom: 10px;
                
                .divinput {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
            }
            .botton {
                display: flex;
                width: 100%;
                justify-content: space-between;
                margin-bottom: 10px;

                .divinput {
                    display: flex;
                    flex-direction: column;
                    width: 47%;    
                }
                
            }

        }

        .btnDescadastrar {
            width: 40%;
            height: 50px;

            margin: 30px 0;
            border-radius: 7px;
            border: 1px solid white;

            background-color: ${p=>p.bgc || 'black'};
            color: black;
            font-size: 1rem;
            font-weight: 700;
            background-color: #F07F0F;
            cursor: pointer;

            :hover {
                color: wheat;

            }
        }
    }

    @media (max-width: 426px) {
        min-width: 395px;
    }

    @media (max-width: 376px) {
        min-width: 350px;
        font-size: 70%;

        button {
            font-size: 0.8rem !important;
        }
    }
    @media (max-width: 376px) {
        min-width: 305px;
        input[type=date] {
            width: 100% !important;
        }
    }
    
`
