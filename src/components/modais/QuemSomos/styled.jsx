import styled from 'styled-components'

export const QDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0000007d;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;

    .qmain {
        width: 60%;
        min-width: 310px;
        max-width: 562px;
        margin-bottom: 20%;
        background-color: #e2e2e2;
        padding: 0px 20px 20px;
        display: flex;
        flex-direction: column;

        .btn-close {
            width: 35px;
            height: 35px;
            background-color: white;
            transform: translate(30px, -15px);
            border-radius: 40px;
            box-shadow: -1px 2px 1px 0px #00000060;
            margin-left: auto;
            cursor: pointer;
            
        }
        h1 {
            text-align: center;
            font-size: 1.3rem;
            color: orange;
        }
        p {
            color: black;
            text-align: left;
            font-size: .8rem;
        }
    }
`