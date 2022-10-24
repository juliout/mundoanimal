import styled from "styled-components";
const Purple = '#6225B5'
const silver = '#808080'
const darkGreen = '#0C3900'
const white = '#fff'

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
        
    }
    .card-post {

        width: 32%;
        min-width: 245px;
        height: 193px;
        margin-left: 7px;
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

    @media (max-width: 767px) {
        .card-post {
            width: 48%;
        }
    }
    @media (max-width: 511px) {
        .card-post {
            width: 99%;
            height: 150px;
        }
    }

`