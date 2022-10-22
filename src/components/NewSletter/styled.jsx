import styled from 'styled-components'

export const NewSletterDiv = styled.div`
    width: 100%;
    min-height: 60px;
    background-color: #0C3900;
    position: fixed;
    bottom: 0;
    border-top: 4px solid white;
    .main {
        display: flex;
        align-items: center;
        width: 99%;
        height: 100%;
        max-width: 960px;
        margin: 0 auto;
        
        .imglgpd {
            max-width: 90px;
            margin-left: auto;
        }
        .texttool {
            width: 170px;
        }
        p {
            
            max-width: 250px;
            font-size: .65rem;
            font-weight: 400;
            color: white;
            text-align: center;
            padding: 5px 5px;
        }
        form {
            display: flex;
            align-items: center;
            margin: 0 10px;
        }
        input[type=text], input[type=email] {
            max-width: 136px;
            margin-right: 10px;
            height: 26px;
            border-radius: 5px;
            padding: 4px 10px;
            box-shadow: 0 5px 10px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
        }
        input[type=checkbox] {
            appearance: none;
            width: 13px;
            min-width: 13px;
            height: 13px;
            min-height: 13px;
            background-color: white;
            border:1px solid white;
            border-radius: 10px;
            cursor: pointer;
            :checked {
                background-color: #636363;
                padding: 1px;
                border: 2px solid white;
            }
        }
        div{
            display: flex;
            align-items: center;
            p {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin: 0 5px;
                min-height: 40px;

                a {
                    color: white;
                    margin-left: 4px;
                    :hover {
                        text-decoration: underline;
                    }
                }
            }

            button {
                width: 37px;
                min-width: 35px;
                height: 26px;
                border-radius: 5px;
                background-color: #F2902C;
                :hover {
                    cursor: pointer;
                    color: white;
                }
            }
        }
    }

    @media (max-width: 750px) {
        .main {
            .imglgpd {
                display: none;
            }
            .texttool {
                display: none;
            }
        }
    }
    @media (max-width: 645px) {
        .ns-div-input {
            display: flex;
            flex-direction: column;
            margin: 4px 0;
            input {
                margin: 3px 0 ;
            }
        }
    }
    @media (max-width: 645px) {
        .main {
            flex-direction: column;
            p {
                margin: 5px 0;
            }
        }
    }
`