import styled from 'styled-components'

export const NewSletterDiv = styled.div`
    width: 100%;
    height: 60px;
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
            
            max-width: 300px;
            font-size: .7rem;
            font-weight: 400;
            color: white;
            text-align: center;
            padding: 0 10px;
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
            height: 13px;
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
                flex-direction: column;
                margin: 0 5px;
                a {
                    color: white;
                    :hover {
                        text-decoration: underline;
                    }
                }
            }

            button {
                width: 37px;
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
`