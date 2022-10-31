import styled from "styled-components";

export const ShareDiv = styled.div`
    position: fixed;
    left: 20px;
    top: 12%;

    .mainShare {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
            font-size: .7rem;
            font-weight: 300;
            margin-bottom: 15px;
            color: #5f5f5f;
        }
        .icons{
            width: 50%;
            align-items: center;
            display: flex;
            flex-direction: column;
            img {
                width: 36px;
                height: 36px;
                margin-bottom: 9px;
                :hover {
                    cursor: pointer;
                    transform: scale(1.3);
                }
            }
        }
    }
    @media (max-width: 546px) {
        display: none;
    }
    
`