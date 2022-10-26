import styled from "styled-components";

export const PDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0000007d;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    
    .pmain {
        width: 60%;
        min-width: 300px;
        max-width: 550px;
        min-height: 201px;
        background-color: #eeeeee;
        display: flex;
        flex-direction: column;
        align-items: center;
 
        .btn-close {
            width: 35px;
            height: 35px;
            background-color: white;
            transform: translate(17px, -15px);
            border-radius: 40px;
            box-shadow: -1px 2px 1px 0px #00000060;
            margin-left: auto;
            cursor: pointer;   
        }
        .container {
            width: 90%;
            min-height: 300px;
            display: flex;
            align-items: center;
        }
        .tel-zap {
            width: 200px;
            margin-bottom: 20px;
        }
        .prigh {
            margin-left: 20px;
            width: 50%;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h1 {
                width: 90%;
                height: auto;
                font-size: 1.2rem;
                text-align: left;
                line-height: 1.3rem;
                font-weight: 700;
                color: orange;
            }
            p {
                font-size: .8rem;
                width: 70%;
                line-height: 1.3rem;
            }
            .picons {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                width: 90%;
                img {
                    width: 50px;
                    :hover {
                        cursor: pointer;
                        transform: scale(1.3);
                    }
                }
            }
        }

    }
    @media (max-width: 764px) {
        .pmain {
            .container {
                flex-direction: column;

            }
            .prigh {
                
                min-height: 200px;
                width: 90%;
                margin-bottom: 10px;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                h1 {
                    text-align: center;
                }
            }
        }
    }
`