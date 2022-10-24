import styled from 'styled-components'


export const FuncionaA = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
        

    width: 210px;
    height: 302px;
    margin: 0 10px;
    margin-top: 25px;
    
    background-color: #f7f7f7;

    .cardN {                    
        display: flex;
        align-items: center;
        justify-content: center;

        width: 35px;
        height: 35px;
        
        background-color: #f0f0f0;
        border: 10px solid #f0f0f0;
        border-radius: 60px;
        margin: 10px 0 7px 0;

        color: #6225B5;
        font-weight: 400;
        font-size: .9rem;
        font-family: 'Noto Sans', sans-serif;
    }

    .exclam {
        font-size: 1.2rem;
        color: #006f90;
        text-shadow: 1px 0px 3px #006f90;
    }
    p {
        width: 95%;
        max-width: 230px;
        font-size: 0.75rem;
        text-align: center;
        font-weight: 400;
        color: #919191;
        font-family: 'Poppins', sans-serif;
    }

    img {
        margin-top: auto;
        margin-bottom: 5px;
        width: 150px;
        height: 130px;
        filter: grayscale(100%);
        filter: gray; /* IE */
        :hover {
            filter: grayscale(0%);
            filter: gray; /* IE */
        }
    }

    @media (max-width:425px) {
        width: 200px;
        height: 300px;
        margin: 15px 2px;
    }
    @media (max-width:425px) {
        width: 250px;
        height: 310px;
        margin: 15px 2px;
    }

`