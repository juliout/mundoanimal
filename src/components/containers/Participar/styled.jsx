import styled from "styled-components";
const Purple = '#6225B5'

export const ParticiparDiv = styled.div`
    background: url('/image/participar-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 172.5px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .main {
        width: 100%;
        height: 99%;
        max-width: 960px;
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
