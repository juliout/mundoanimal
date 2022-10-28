import styled from "styled-components";
const Purple = '#6225B5'


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