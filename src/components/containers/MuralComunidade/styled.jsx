import styled from "styled-components";

const Purple = '#6225B5'
const greenVeri= '#007520'

export const MuralComunidadeDiv = styled.div`
    width: 100%;
    min-height: 200px;
    height: auto;
    background-color: #F7F7F7;
    padding: 20px 0;
    .main {
        width: 99%;
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
    .mural-title {
        width: auto;
        max-width: 190px;
        height: 35px;
        font-size: 1rem;
        color: ${Purple};
        display: flex;
        flex-direction: column;

        :after {
            content: '';
            width: 60px;
            height: 2px;
            background: #6225B5;
            display: block;
            margin: 4px 0;
        }
    }
//css posts
    .create-post {
        width: 100%;
        height: 243px;
        margin: 22.5px 0;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background-color: white;
        box-shadow: 0px 0px 16px -5px rgb(0 0 0 / 52%);
        border-radius: 4px;
        input, textarea {
            border-radius: 5px;
            padding: 10px;
            background-color: #f6f6f6;
        }
    }
    .line-one {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-size: .8rem;
            font-weight: 400;
            text-align: right;
        }
        
        input {
            width: 58%;
            height: 30px;
            padding-left: 10px;
            border: none;
        }
    }

    #post-textarea {
        resize: none;
        width: 100%;
        height: 72px;
    }
    #link-post {
        width: 100%;
        height: 30px;
    }
    .post-btn-enviar {
        background-color: #F07F0F;
        min-width: 150px;
        max-width: 220px;
        width: 25%;
        height: 30px;
        padding: 2px 8px;
        border-radius: 4px;
        color: #FFFFFF;
        box-shadow: none;
        margin-left: auto;
        cursor: pointer;
        :hover {
            opacity: 0.8;
        }
    }
//caixa de organizar posts
    .organizar-post {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        p {
            margin-right: 5px;
            font-size: .9rem;
        }
        img{
            width: 30px;
            height: 30px;
        }
    }
//caixa de organizar os posts e comentarios
    //caixa dos posts
    .box-posts {
        width: 100%;
        min-height: 200px;
        margin-top: 10px;
        margin-bottom: 10px;
        height: auto;
        
    }
    .post-container {
        width: 100%;
        min-height: 259px;
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
    .post-verificado {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${greenVeri}
    }
    .veri-icon {
        width: 24px;
        min-width: 24px;
        height: 24px;
        fill: ${greenVeri}
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
    .caixa-comentario {
        display: flex;
        width: 100%;
        margin-top: 10px;
    }
    .icon-comentario {
        width: 37px;
        min-width: 37px;
        height: 37px;
        margin-right: 2px;
        align-self: center;
        margin-bottom: 15px;
    }
    .container {
        display: flex;
        flex-direction: column;
        min-height: 63px;
        align-items: center;
    }
    .conteudo {
        background-color: #f6f6f6;
        height: 100%;
        padding: 10px;
        border-radius: 5px;
    }
    .titulo-comentario {
        color: #6225B5;
        font-size: .8rem;
        font-weight: 600;
    }
    .comentario {
        font-size: .8rem;
        font-weight: 400;
        margin-top: 2px;
    }
    .bot {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .btn-comentario-curtir {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: .8rem;
    }
    .div-comentario-cutir {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 38px;
        height: 22px;
        border-radius: 10px;
        border:1px solid silver;
        padding-right: 7px;
        cursor: pointer;
        transform: translateY(-10px);
    }
    .comentario-joinha {
        width: 20px;
        height: 20px;
        background-color: silver;
        border-radius: 10px;
        border: 2px solid silver;
    }
`