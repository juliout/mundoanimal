import styled from "styled-components";
const Purple = '#6225B5'

export const PerguntasDiv = styled.div`

    display: flex;
    justify-content: center;

    padding: 20px 0 50px 0;

    width: 100%;
    min-height: 410px;
    height: auto;
    background-color: #f7f7f7;
    
    .perguntasMain {
        width: 99%;
        max-width: 960px;
        padding: 0 10px;

        h1 {
            color: #6225B5;
            font-weight: 600;
            font-size: 1rem;
            margin: 0;

            :after {
                content: '';
                width: 60px;
                height: 2px;
                background: ${Purple};
                display: block;
                margin: 7px 0;
            }
        }
        .perguntasContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

    }


`