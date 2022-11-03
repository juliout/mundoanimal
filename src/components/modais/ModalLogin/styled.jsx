import styled from "styled-components";

export const ModalDiv = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000049;
    z-index: 99;

    .modalMain {
        width: 90%;
        min-width: 310px;
        max-width: 600px;
        min-height: 200px;
        max-height: 700px;
        margin-bottom: 20%;
        background-color: #f4f4f4;
        border-radius: 20px;

        display: flex;
        flex-direction: column;

        .btnClose {
            margin-left: auto;
            width: 25px;
            height: 25px;
            border-radius: 30px;
            transform: scale(1.5);
            cursor: pointer;
        }
        .form-login {
            display: flex;
            flex-direction: column;
            width: 80%;
            min-height: 150px;
            margin: 0 auto;
            h1 {
                font-size: 1.3rem;
                text-align: center;
                font-weight: 400;
                color: #0C3900;
                margin-bottom: 25px;
            }
            div {
                display: flex;
                justify-content: space-between;
                input {
                    width: 45%;
                    height: 35px;
                    border-radius: 4px;
                    box-shadow: inset 2px 4px 0px #00000052;
                    padding-left: 10px;
                }
            }
        }
        .login {
            width: 200px;
            height: 40px;
            margin: 20px auto;
            border-radius: 5px;
            color: white;
            font-size: 17px;
            background-color: #F07F0F;
            box-shadow:  2px 2px 0px #00000052;
            :hover {
                box-shadow: none;
                transform: scale(.95);
                cursor: pointer;
            }
        }

        .nao-cadastrado {
            width: 50%;
            margin: 15px auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
                font-size: 1rem;
                margin-bottom: 10px;
            }
            button {
                width: 100px;
                height: 30px;
                border: none;
                background-color: transparent;
                cursor: pointer;
                font-weight: 700;
                border-radius: 4px;
                :hover {
                    box-shadow:  0px 0px 3px #00000052;
                }
            }
        }
    }
    @media (max-width: 426px) {
        .modalMain {
            .form-login {
            div {
                width: 100%;
                flex-direction: column;
                input {
                    width: 100%;
                    margin-bottom: 10px;
                }
            }
        }
        .nao-cadastrado{
            h2 {
            font-size: .9rem;
            }
        }
        }
    }
`