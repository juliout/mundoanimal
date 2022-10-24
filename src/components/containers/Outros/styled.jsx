import styled from "styled-components";
const darkGreen = '#0C3900'
const Purple = '#6225B5'


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
        min-height: 140px;
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

    @media (max-width: 681px) {
        .card-outros {
            width: 200px;
            min-width: 200px;
        }
    }
    @media (max-width: 375px) {
        .card-outros {
            width: 95%;
            max-width: none;
        }
    }
`