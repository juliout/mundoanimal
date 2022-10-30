import styled from "styled-components";

export const ComentarioDiv = styled.div`
    
        display: flex;
        width: 100%;
        margin-top: 10px;
    
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
        width: 100%;
        min-height: 63px;
        align-items: center;
    }
    .conteudo {
        background-color: #f6f6f6;
        width: 100%;
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
        word-break: break-all;
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
    .curtido {
        color: #6225B5;
        fill: #6225B5;
        border-color: #6225B5;
    }
`