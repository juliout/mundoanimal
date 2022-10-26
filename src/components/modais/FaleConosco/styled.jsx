import styled from 'styled-components'

export const FDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0000007d;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    
    .fmain {
        width: 70%;
        max-width: 562px;
        min-width: 290px;
        min-height: 357px;
        background-color: #d3d3d3;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            font-size: 1.3rem;
            color: #F07F0F;
        }
        p {
            font-size: .8rem;
        }

        form {
            width: 70%;
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            input {
                display: flex;
                align-items: center;
                padding-left: 15px;
                height: 30px;
                border-radius: 4px;
                box-shadow: inset 2px 4px 0px #00000052;
            }
            textarea{
                padding: 10px;
                resize: none;
                width: 100%;
                height: 80px;
                border-radius: 4px;
                margin-top: 10px;
                box-shadow: inset 2px 4px 0px #00000052;
            }
            button {
                width: 95px;
                height: 30px;
                background-color: #F07F0F;
                border-radius: 7px;
                margin-top: 20px;
                margin-bottom: 10px;
                color: white;
                font-size: 1rem;
                font-weight: 700;
                box-shadow: 0 5px 10px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
                cursor: pointer;
                :hover {
                    box-shadow: none;
                }
            }

            @media (max-width: 500px) {
                width: 90%;
            }
        }
        .name-email {
            display: flex;
            justify-content: space-between;
            width: 100%;
            input {
                width: 49%;
                height: 30px;
                border-radius: 4px;
            }
            @media (max-width: 500px) {
                flex-direction: column;
                input {
                    width: 90%;
                    margin: 5px auto;
                }
            }
        }
        .fale-assunto {
            margin-top: 20px;
            width: 100%;
            @media (max-width: 500px) {
            
                width: 90%;
                margin: 5px auto;
            
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
`