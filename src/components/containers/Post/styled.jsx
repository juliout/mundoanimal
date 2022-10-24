import styled from 'styled-components'

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
        height: 860px;
        background-color: white;
        margin-top: 10px;
        padding: 15px 22.5px;
        border-radius: 7px;
        display: flex;
    }

    .left {
        width: 72%;

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
        h1 {
            font-size: 2.3rem;
            font-weight: 400;
            margin: 10px 0;
        }
        p {
            font-size: .8rem;
            line-height: 1.2rem;
            margin-bottom: 15px;
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
        margin: 15px 0;
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

    .title-comentarios {
        border-top: 1px solid silver;
        border-bottom: 1px solid silver;
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

    // -------- //
    .right {
        width: 28%;
        margin-left: 5px;
        background-color: blue;
    }
`