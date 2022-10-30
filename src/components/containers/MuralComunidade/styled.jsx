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

    
`