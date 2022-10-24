import styled from "styled-components";

const darkGreen = '#0C3900'
const Purple = '#6225B5'

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
            margin-bottom: 5px;
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
            .card-date {
                font-size: .6rem;
                font-weight: 300;            
            }
            p {
                font-size: .6rem;
                font-weight: 300;
                margin: 0 auto;
            }
            h3 {
                font-size: .7rem;
                margin: 0 auto;
            }
        }

        @media (max-width: 768px) {
            .card {
                width: 45%;
                height: 200px;
                max-width: none;
                img {
                    height: 90px;
                }
            }
        }
        @media (max-width: 426px) {
            .card {
                width: 95%;
                
                height: 220px;
                max-width: none;
                display: flex;
                flex-direction: column;
                img {
                    max-width: 300px;
                    height: 90px;
                    margin: 0 auto;
                }
                p {
                    font-size: .9rem;
                }
            }
        }

`