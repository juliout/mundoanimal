import styled from "styled-components";

const pColor = '#3eb54e'
const h1Color = '#095e57'
const borderColor = '#3fb54f'
const silverColor = '#838383'
const greenbtn = '#cce737'

const darkGreen = '#0C3900'
const florecenteGren = '#5AFF2E'
const Purple = '#6225B5'
const silver = '#808080'
const white = '#fff'
const orangeBtn = '#F2902C'
const greenVeri= '#007520'


export const BannerDiv = styled.section`
    
    width: 100%;
    height: 303px;
    margin-top: 57px;
    .banner {
        width: 100%;
        max-width: 960px;
        height: 100%;
        background-image: url('/image/banner-index.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .rpbanner {
        
        width: 100%;
        height: 68px;
        display: flex;
        align-items: flex-end;
        margin-bottom: 20px;

        h1{
            width: 50%;
            height: 100%;
            background-color: ${darkGreen};

            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            padding-left: 10px;
            line-height: 1.7rem;
            display: flex;
            align-items: center;
            box-shadow: 3px 3px 8px 1px rgb(98 37 181 / 55%)
        }

        button {
            width: 30%;
            max-width: 250px;
            height: 50px;
            font-size: 1.2rem;
            font-weight: 700;
            margin-left: auto;
            margin-right: 5%;
            border-radius: 5px;
            
            -webkit-box-shadow: 2px 3px 0px 1px rgba(184,184,184,1);
            -moz-box-shadow: 2px 3px 0px 1px rgba(184,184,184,1);
            box-shadow: 2px 3px 0px 1px rgba(184,184,184,1);ow: 3px 4px 0px 1px rgba(184,184,184,1);
            :hover {
                cursor: pointer;
                box-shadow: none;
                margin-bottom: -5px;
                margin-right: 4%;
            }
        }
    }
   
`
export const BannerTwo = styled.div`
    background-color: #ccc;
    width: 100%;
    height: 203px;
    padding: 15px 0;
    margin: 15px 0;
    .main {
        width: 100%;
        max-width: 960px;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-evenly;
    }
    .card {
        background-color: red;
        width: 32%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        :hover {
            cursor: pointer;
            span {
                text-decoration: underline;
            }
        }
    }
    .bg1{
        background: url('/image/banner-index1.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bg2{
        background: url('/image/banner-index2.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bg3{
        background: url('/image/banner-index3.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: flex-end;
        :hover{
            cursor: default;
        }
    }
    .card-text {
        width: 70%;
        background-color: ${florecenteGren};
        font-size: .8rem;
        font-weight: 700;
        text-align: left;
        padding-left: 10px;
        margin-bottom: 20px;
    }
    .div-right {
        margin-left: auto;
        text-align: right;
    }
    .cardleft {
        width: 55%;
        margin-bottom: 10px;

        p {
            width: 100%;
            height: 30px;
            padding: 2px 5px;
            background-color: ${florecenteGren};
            font-size: .8rem;
            font-weight: 700;
            text-align: right;
            line-height: .8rem;
            margin-bottom: 10px;
        }
    }
    .groupnot {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .logonot {
        width: 30px;
        height: 30px;
        :hover {
            transform: scale(1.3);
            cursor: pointer;
        }
    }
    .telnot {
        width: 32%;
        transform: translateY(10px);
        margin-right: 10px;
        cursor: pointer;
    }

`

export const  UltimasDiv = styled.div`

    width: 100%;
    min-height: 200px;
    height: auto;
    
    .main {
        width: 99%;
        max-width: 960px;
        min-height: 200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .ultima-title {
        width: auto;
        max-width: 140px;
        height: 50px;
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

    .show-cards {
        width: 100%;
        min-height: 200px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .card-post {

        width: 32%;
        min-width: 250px;
        height: 193px;
        margin-left: 10px;
        padding: 0 22.5px 15px 22.5px;
        text-align: left;
        cursor: pointer;
        margin-bottom: 1%;
        line-height: 1.2rem;
                
        p {
            font-size: .7rem;
            color: ${silver};
            margin-bottom: 10px;
        }
        h2 {
            font-size: .8rem;
            margin-bottom: 5px;
        }
        span {
            width: 80%;
            height: 150px;
            font-size: .8rem;
            color: ${silver};
        }

        :hover {
            background-color: ${darkGreen};
            color: ${white};
            border-radius: 5px;
            span {
                color: ${white};
            }
        }
        
    }
    .banner-get {
        margin-top: 20px;
            width: 100%;
            min-height: 50px;
            background-color: red;
    }
    .containerPosts {
        margin-bottom: 10px;
    }

`
export const ParticiparDiv = styled.div`
    background: url('/image/participar-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 172.5px;
    margin-top: 20px;

    .main {
        width: 100%;
        height: 100%;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h2 {
            font-size: 1rem;
            color: ${Purple};
        }
        p {
            font-size: .8rem;
            font-weight: 500;
        }
    }
    
`

export const MuralComunidade = styled.div`
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
        margin-top: 5px;
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
    }
    .div-user {
        height: 42px;
        display: flex;
        align-items: center;
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

export const OutrosDiv = styled.div`
    width: 100%;
    min-height: 300px;

    .main {
        width: 99%;
        max-width: 960px;
        min-height: 250px;
        margin: 20px auto;
        display: flex;
        flex-direction: column;

    }
    .outro-title {
        width: auto;
        max-width: 140px;
        height: 50px;
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
    .container-cards {
        width: 97%;
        min-height: 150px;
        margin: 0 auto 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .card-outros{
        
        width: 24%;
        max-width: 218px;
        min-width: 218px;
        height: 140px;
        padding: 7.5px;
        margin-bottom: 10px;
        :hover {
            background-color: ${darkGreen};
            cursor: pointer;
            color: white !important;
        }
    }
    .card-top {
        display: flex;
        img {
            width: 60px;
            height: 60px;
            margin-right: 10px;
        }
        div {
            max-height: 60px;
        }
        p {
            font-size: .66rem;
        }
        h3 {
            font-size: .8rem;
            font-weight: 700;
            line-height: .9rem;
        }
    }
    .card-text {
        margin-top: 5px;
        font-size: .75rem;
        font-weight: 400;
    }
`

export const ModerarDiv = styled.div`
    width: 100%;
    height: 187px;
    background: url('/image/bg-be-moderator.png');
    background-size: 100% 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    margin-bottom: 10px;

    .main {
        width: 99%;
        max-width: 960px;
        height: 100%;
        background: url('/image/be-moderator.png');
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        
        div {
            text-align: center;
            margin-right: 10%;
        }

        h1 {
            font-size: 1.3rem;
        }
        a {
            color: ${orangeBtn};
            text-decoration: underline;
            :hover {
                color: black;
            }
        }
    }
`

export const ComoFuncionaDiv = styled.div`
    
    width: 100%;
    min-height: 550px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .funcionaMain {
        width: 99%;
        max-width: 960px;
        height: 100%;

        display: flex;
        flex-direction: column;
        padding: 25px 0px;
       

        .funcionaTop {
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
            p {
                color: ${silverColor};
                font-weight: 700;
                font-size: .8rem;
                margin-bottom: 20px;
                font-weight: 400;
            }
            span {
                color: ${Purple};
                font-size: .9rem;
                font-weight: 700;
            }
        }

        .funcionaBottom {
            
            width: 100%;
            min-height: 400px;
            height: auto;
            
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            
            
            margin: 0 auto;
            
        }
    }
`
export const PaticiparComunidade = styled.div`
    width: 100%;
    height: 240px;
    background: url('/image/join-comu-bg2.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .main {
        width: 99%;
        height: 100%;
        max-width: 960px;
        background-image: url('/image/bg2-comu.png');
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            margin-top: 130px;
            color: black;
            text-decoration: underline;
        }
    }

    @media (max-width: 750px) {
        height: 180px;
        .main {
            background-size: 90%;
            background-repeat: no-repeat;
            background-position: bottom;
        }
    }
    
    @media (max-width: 501px) {
        height: 150px;
        background-size: 100% 80%;
        .main {
            a {
                margin-top: 100px;
            }
        }
    }
    @media (max-width: 376px) {
        height: 130px;
        .main {
            background-size: 95%;
            a {
                margin-top: 100px;
                font-size: .8rem;
            }
        }
    }

`

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
export const IndicarBannerDiv = styled.div`
    
    width: 100%;
    min-height: 160px;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('/image/indique-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;

    .main {
        width: 100%;
        max-width: 960px;
        display: flex;
        align-items: center;
        span {
            width: 50%;
            background-color: ${darkGreen};
            color: white;
            padding-left: 10px;
        }
        button {
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            min-width: 160px;
            max-width: 250px;
            height: 40px;

            border-radius: 8px;
            margin-left: auto;
            margin-right: 10px;
            background-color: ${orangeBtn};
            font-size: .9rem;
            font-weight: 700;
            cursor: pointer;
        }
    }
    @media (max-width: 501px){
        .main {
            span {
                width: 60%;
                font-size: 80%;
            }
        }
    }    
`

export const BlogDiv = styled.div`
        width: 100%;
        min-height: 265px;
        .main {
            width: 99%;
            max-width: 960px;
            min-height: 265px;
            
            margin: 0 auto;
            padding: 22.5px;
        }
        .title-main {
            display: flex;
            justify-content: space-between;
            align-items: center;
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
            h2 {
                color: #6225B5;
                font-weight: 600;
                font-size: .8rem;
                margin: 0;
                
                a:hover {
                    text-decoration: underline;
                }

                :after {
                    content: '';
                    width: 60px;
                    height: 2px;
                    background: ${Purple};
                    display: block;
                    margin: 7px 0;
                }
            }
        }

        .box-cards {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            width: 100%;
            min-height: 170px;
            
            margin: 10px auto;
        }
        .card {
            width: 24.5%;
            max-width: 240px;
            min-width: 210px;
            height: 170px;
            padding: 7.5px 15px;
            cursor: pointer;
            :hover {
                background-color: ${darkGreen};
                color: white;
            }
            img {
                width: 100%;
                height: 73px;
                border-radius: 5px;
            }
            p {
                font-size: .6rem;
                font-weight: 300;
            }
            h3 {
                font-size: .7rem;
            }
        }

`
export const SerieVoce = styled.div`
    width: 100%;
    min-height: 378px;
    background-color: ${darkGreen};
    .main {
        width: 99%;
        max-width: 960px;
        min-height: 370px;
        color: white;
        margin: 0 auto;
        padding: 22px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h1 {
            font-weight: 600;
            font-size: 1.3rem;
            margin: 0;              

            :after {
                content: '';
                width: 70px;
                height: 2px;
                background: white;
                display: block;
                margin: 7px 0;
            }
        }
        p {
            font-size: .8rem;
        }
        h3 {
            font-size: 1rem;
        }   
    }
    .links {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        min-height: 100px;
 
    }
    .link {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: 15.5%;
        min-width: 105px;
        height: 40px;

        border-bottom: 2px solid white;
        margin-bottom: 10px;
        margin-right: 10px;
        a {
            font-size: .8rem;
        }
    }

`
export const RestInfoDiv = styled.div`
    
    width: 100%;
    min-height: 220px;
    height: auto;

    display: flex;
    justify-content: center;

    .main {
        width: 99%;
        max-width: 960px;
        
        min-height: 220px;
        height: auto;

        display: flex;
        flex-direction: column;
        
    }
    .restTop {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            width: 100%;
            height: 140px;
            
            border-bottom: 2px ${Purple} solid;


    }
    .list {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 30%;
        max-width: 960px;
    }
    .hidden {
            display: none;
            opacity: 0;
    }

    .hiddenmenu {
        display: none;
        font-size: 600;
        font-size: 0.9rem;
    }

    .divLeft {
        display: flex;
        align-items: center;
        max-width: 250px;
        justify-content: space-around;
        a {
            font-size: 1.1rem;
            margin-left: 15px;
        }
    }
    .bot {    
        margin-top: 10px;
        font-weight: 700;
        font-size: 1rem;
        width: 47% ;
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        
    }
    .restLogo {
        width: 100px;
        height: 22px;
        margin-left: 10px;
    }

        
    .restBot {
        width:100%;
        min-height: 80px;
        display: flex;
        align-items: center;
        padding-right: 5px;
        margin-top: 10px;
        justify-content: space-between;
    }
    .left {
        display: flex;
        
        div {
            display: flex;
            align-items: center;
            margin-right: 10px;

            span {
                font-family: 'Poppins', sans-serif;
                font-size: 0.7rem;
                font-weight: 700;
                margin-left: 10px;
            }
        }
        .lIcon {
            width: 25px;
            height: 25px;
            margin-right: 6px;
        }
    }

    .right {
        display: flex;
        align-items: center;
        div {
            display: flex;
            align-items: center;
        }
        span {
            font-size: 0.8rem;
            font-weight: 700;
        }
        .socialIcons {
            width: 35px;
            height: 35px;
            margin-left: 10px;
            :hover {
                transform: scale(1.3);
                cursor: pointer;
            }
        }
    }
`
