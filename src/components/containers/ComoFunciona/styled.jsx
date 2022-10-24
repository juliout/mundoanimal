import styled from "styled-components";

const Purple = '#6225B5'
const silverColor = '#838383'

export const ComoFuncionaDiv = styled.div`
    
    width: 100%;
    min-height: 550px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .funcionaMain {
        width: 98%;
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