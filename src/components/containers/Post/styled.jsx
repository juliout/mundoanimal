import styled from 'styled-components'

const darkGreen = '#0C3900'

export const PostDiv = styled.div`

    width: 100%;
    min-height: 636px;
    margin-top: 57px;
   
    .main {
        width: 100%;
        background-image: url('/image/banner-index.jpg');
        background-color: #F7F7F7;
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .banner-get {
        width: 98%;
        max-width: 960px;
        margin-top: 20px;
    }
    .post-div{
        width: 98%;
        max-width: 980px;
        min-height: 1217px;
        background-color: white;
        margin-top: 10px;
        padding: 15px 22.5px;
        border-radius: 7px;
        display: flex;
    }

    .left {
        width: 72%;
        display: flex;
        flex-direction: column;

    }

    .navigation {
        a {
            font-size: .75rem;
            color: black;
            margin-bottom: 15px;
            font-weight: 400;
        }
    }
    .content {
        margin-bottom: 45px;
        h1 {
            font-size: 2rem;
            font-weight: 400;
            margin: 10px 0;
        }
        p {
            font-size: .8rem;
            line-height: 1.2rem;
            margin-bottom: 15px;
        }
        img {
            width: 520px;
            height: 520px;
        }
    }
    .compartilhe {
        display: flex;
        align-items: center;

        margin: 7.5px 0 ;
        p {
            font-size: .7rem;
        }
        div {
            display: flex;
            align-items: center;
        }
    }
    .tags{
        display: flex;
        margin-top: 20px;
        margin-bottom: 30px;
        p {
            width: 42px;
            height: 22.5px;
            
            background-color: #455968;
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;

            color: white;
            font-weight: 400;
            font-size: .7rem;
            margin-right: 5px;
        }
    }
    .compartilhe-icon {
        width: 24px;
        min-width: 24px;
        margin-left: 5px;
        :hover {
            transform: scale(1.3);
        }
    }

    .create-comentario {
        height: 360px;
        border-top: 1px silver solid;
        border-bottom: 1px silver solid;
        margin: auto 0;
    }

    .title-comentarios {
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        width: 100%;
        height: 88px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            font-size: .8rem;
            font-weight: 700;
        }
        div {
            font-size: .8rem;
            font-weight: 400;
            select {
                margin-left: 10px;
                background-color: #e2e2e2;
                border: 1px silver solid;
                text-align: center;
                width: 100px;
                height: 27px;
                font-size: .7rem;
            }
        }
    }
    .mais-voce-sabia {
        width: 100%;
        min-height: 200px;
        margin-top: auto;
        h1 {
            color: black;
            font-weight: 100;
            font-size: 1.5rem;
            letter-spacing: .1rem;
            margin: 0;              

            :after {
                content: '';
                width: 60px;
                height: 2px;
                background: black;
                display: block;
                margin: 7px 0;
            }
        }
    }

    .caixa-cards {
        width: 100%;
        min-height: 200px;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        a {
            color: black;
        }
    }
    .cards {
        width: 49%;
        min-width: 200px;
        max-width: 323px;
        height: 103px;

        margin-top: 4px;
        padding-left: 10px;
        border-radius: 4px;
        cursor: pointer;

        :hover {
            background-color: ${darkGreen};
            color: white;
        }
        .header {
            font-size: .75rem;
            span {
                margin-left: 10px;
            }
        }
        h2 {
            margin-top: 5px;
            font-size: .9rem;
        }
        .caixatexto {
            font-size: .7rem;
        }
    }

    // -------- //
    .right {
        width: 28%;
        min-width: 200px;
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        .box-top {
            width: 98%;
            height: 250px;
            background-color: black;
            margin: 0 auto;
        }
        h1 {
            color: black;
            font-weight: 100;
            font-size: 1.2rem;
            letter-spacing: .1rem;
            align-self: flex-start;

            :after {
                content: '';
                width: 60px;
                height: 2px;
                background: black;
                display: block;
                margin: 7px 0;
            }
        }
        .more-posts-online {
            margin: 0 auto;
            width: 98%;
            padding: 7.5px 15px;
            background-color: silver;
            margin-top: 10px;
            border-radius: 4px;
        }
        .posts {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            margin-top: 5px;
            
        }
        .btn-default {
            margin: 0px 0;
        }
        .post {
            width: 100%;
            
            max-width: 220px;
            min-width: 175px;

            padding: 7.5px 3.75px;
            margin-bottom: 10px;
            border-bottom: 1px solid black;
            a {
                color: black;
                line-height: 15px;
            }
            .post-header {
                width: 100%;
                margin-bottom: 7px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                img {
                    width: 45px;
                    height: 45px;
                    margin-right: 4px;
                }
                div {
                    width: 75%;
                    min-height: 45px;
                }
                p {
                    font-size: .6rem;
                    color: #949494;
                }
                h3 {
                    font-size: .7rem;
                }
            }
            .text-bottom {
                margin-top: auto;
                font-size: .7rem;
            }
        }

    }

    @media (max-width: 670px){
        .post-div {
            flex-direction: column;
            align-items: center;
            .left {
                width: 90%;
            }
            .tags {
                margin-bottom: 20px;
            }
            .mais-voce-sabia {
                margin: 20px 0 ;
            }
            .rigth {
                margin-top: 20px;
            }
        }
        .right {
            width: 100%;
            .box-top{
                width: 250px;
            }
            .more-posts-online {
                width: 90%;
            }
            .posts {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .post {
                width: 45%;
                min-width: 130px;
                margin-right: 5px;
                border-bottom: none;
            }
            .btn-default {
                margin: 10px auto;
            }
        }
    }
    @media (max-width: 425px) {
        .post-div {
            .left {
                width: 100%;
            }
            .tags {
                display: flex;
                flex-wrap: wrap;
                p {
                    margin-top: 4px;
                }
            }
            .mais-voce-sabia {
                .cards {
                    width: 90%;
                }
            }
        }
        .right {
            width: 100%;
            .box-top{
                width: 250px;
            }
            .more-posts-online {
                width: 100%;
            }
            .posts {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .post {
                width: 45%;
                padding: 0;
                min-width: 130px;
                margin-right: 5px;
                border-bottom: none;
                .text-bottom  {
                    margin-top: 5px;
                }
                .post-header  {
                    min-height: 70px;
                    height: auto;
                    padding: 0;
                    margin-bottom: 0;
                    align-items: center;
                }
            }
            .btn-default {
                margin: 10px auto;
            }
            
        }
        @media (max-width: 375px) {
            .right {
                .posts {
                    justify-content: flex-start;
                }
                .post {
                    width: 90%;
                    min-width: 170px;
                }
            }
        }
        
    }
`