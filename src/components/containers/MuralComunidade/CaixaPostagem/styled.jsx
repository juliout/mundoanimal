import styled from "styled-components";
const greenVeri= '#007520'

export const PostagemDiv = styled.div`

    width: 100%;
    min-height: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: auto;
    .post-container {
        width: 100%;
        min-height: 159px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background-color: white;
        box-shadow: 0px 0px 16px -5px rgb(0 0 0 / 52%);
        border-radius: 4px;
        margin-bottom: 5px;
        p {
            font-size: .75rem;
            font-weight: 400;
            text-align: left;
        }
        .text {
            width: 100%;
            min-height: 50px;
            word-break: break-all;
            
        }
    }
    .titulos-posts {
        color: #6225B5;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 7px;
    }
    .div-user {
        height: 42px;
        display: flex;
        align-items: center;
        margin: 15px 0;
    }
    .user-image {
        width: 42px;
        height: 42px;
        margin-right: 5px;
    }
    .interact {
        height: 42px;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .btns-interact{
        display: flex;
        button {
            width: 45px;
            height: 30px;
            margin-right: 7.5px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            border-radius: 5px;
            cursor: pointer;
        }
    }
    .interact-icons {
        width: 18px;
        height: 22px;
    }
    .interact-icons-fill {
        fill: red;
    }
    .post-verificado {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${greenVeri}
    }
    .veri-icon {
        width: 30px;
        min-width: 30px;
        height: 30px;
        fill: ${greenVeri}
    }

    .noveri {
        color: red;
        fill: red;
    }
    //caixa dos comentarios

    .comentario-container {
        width: 90%;
        max-width: 870px;
        min-height: 200px;
        margin: 0 auto 5px;
        box-shadow: 0px 0px 16px -5px rgb(0 0 0 / 52%);
        background-color: #FFF;
        border-radius: 4px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .relevante {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: .9rem;
        margin-left: auto;
        span{
            cursor: pointer;
            display: flex;
            align-items: center;
        }
    }
    .comentar {
        width: 97%;
        height: 37px;
        display: flex;
        align-items: center;
        margin: 10px 0;

    }
    .icon-comentar {
        width: 37px;
        height: 37px;
        margin-right: 2px;
    }
    #inpt-comentario {
        height: 29px;
        width: 100%;
        padding: 10px;
        background-color: #f6f6f6;
    }

    .div-comentario {
        width: 97%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }


`