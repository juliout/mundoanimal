import styled from "styled-components";

const darkGreen = '#0C3900'

export const SerieVoceDiv = styled.div`
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
        width: 15%;
        min-width: 106px;
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: 2px solid white;
        margin-bottom: 10px;
        .flip-animate  {
            text-align: left;
        }
        padding: 0;
        a {
            font-size: .8rem;
        }
    }

`