import styled from "styled-components";

export const EntrarDiv = styled.div`
    background-color: #00000083;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;

    .emain {
        background-color: #E3E3E2;
        margin: 0 auto;
        width: 60%;
        max-width: 550px;
        min-height: 300px;
        display: flex;
        flex-direction: column;

        border-radius: 7px;


        .btn-close {
            width: 35px;
            height: 35px;
            background-color: white;
            transform: translate(15px, -13px);
            border-radius: 40px;
            box-shadow: -1px 2px 1px 0px #00000060;
            margin-left: auto;
            cursor: pointer;   
        }
        h1 {
            margin: 0 auto;
            font-size: 1.3rem;
            color: #F07F0F;
        }
        form {
            margin: 0 auto;
            width: 80%;
            height: 100%;

        }
        .termos {
            width: 100%;
            font-size: .9rem;
            line-height: 1.5;
            div {
                display: flex;
                align-items: center;
            }
            p {
                width: 100%;
                font-size: 12px;
                display: block;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
            }
            span {
                margin-left: 10px;
            }
            input {
                height: 17px;
                width: 17px;
                margin-top: 5px;
                margin-right: 10px;
                cursor: pointer;
                float: left;

            }
            a {
                padding: 4px;
                color: #F07F0F;
            }
        }

        .inputs {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            input {
                width: 42%;
                height: 30px;
                box-shadow: inset 2px 4px 0px #00000030;
                font-size: 16px;
                color: #646464;
                border-radius: 4px;
                padding-left: 10px;
                font-weight: 300;
            }
        }

        .btn-entrar {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 30px;
            img {
                cursor: pointer;
                width: 57px;
                height: 56px;
                position: absolute;
                transform: translateX(-10px);
            }
            button {
                width: 200px;
                height: 30px;
                border-radius: 5px;
                background-color:
                    ${p=> 
                        p.type === 'whatsapp' ? '#40C351'
                        : p.type === 'telegram' ? '#1E94D3'
                        : p.type === 'mail' ? '#E4D12F'
                        : p.type === 'notification' ? '#D50808'
                        : null
                    };
                color: white;
                padding-right: 10px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                span {
                    margin-left: auto;
                    margin-right: 20px;
                    font-weight: 700;
                }
                :hover {
                    cursor: pointer;
                    color: black;
                }
            }
        }

    }
`

export const MegaDiv = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: #00000071;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
        .megaMain {
            width: 65%;
            min-height: 470px;
            max-width: 562px;
            min-width: 380px;
            background-color: #E3E3E2;
            display: flex;
            flex-direction: column;
            align-items: center;
            h1 {
                font-size: 1.3rem;
                width: 90%;
                text-align: center;
                color: #F07F0F;
            }
            p{
                font-size: .75rem;
            }

            form {
                width: 80%;
                input {
                    box-shadow: inset 2px 4px 0px #00000030;
                    height: 30px;
                    font-size: 16px;
                    color: #646464;
                    border-radius: 5px;
                    padding-left: 10px;
                    ::placeholder {
                        color: silver;
                    }
                }
                #mega-apelido {
                    width: 100%;
                }
                .inputs{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 5px;
                    input {
                        width: 32%;
                    }
                }

                #mega-text {
                    resize: none;
                    width: 100%;
                    box-shadow: inset 2px 4px 0px #00000030;
                    height: 144px;
                    font-size: 16px;
                    color: #646464;
                    border-radius: 5px;
                    padding: 10px;
                    ::placeholder {
                        color: silver;
                    }
                }
                .input-enviar {
                    display: flex;
                    justify-content: space-between;
                    button {
                        cursor: pointer;
                        width: 25%;
                        max-width: 130px;
                        height: 30px;
                        font-size: 14px;
                        text-decoration: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 4px;
                        background-color: #F07F0F;
                        color: #FFFFFF;
                        font-weight: bold;
                        text-transform: uppercase;
                        box-shadow: 0 5px 10px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
                        :hover {
                            box-shadow: none;
                        }
                    }
                }
                #mega-link {
                    width: 70%;
                }
                .text-rodape {
                    font-size: .6rem;
                    text-align: left;
                    margin-top: 5px;
                }
            }
    

        }
        .btn-close {
            width: 35px;
            height: 35px;
            background-color: white;
            transform: translate(15px, -15px);
            border-radius: 40px;
            box-shadow: -1px 2px 1px 0px #00000060;
            margin-left: auto;
            cursor: pointer;
        
        }
        @media (max-width: 375px) {
            .megaMain {
                min-width: 340px;
            }
        }
        @media (max-width: 320px) {
            .megaMain {
                min-width: 300px;
                margin-right: 10px;
            }
        }
    `