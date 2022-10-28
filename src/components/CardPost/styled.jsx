import styled from "styled-components";
const silver = '#808080'
const darkGreen = '#0C3900'
const white = '#fff'

export const CardDiv = styled.div`

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


`