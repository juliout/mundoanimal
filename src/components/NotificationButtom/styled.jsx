import styled from "styled-components";

export const ButtonDiv = styled.div `
    position: fixed;
    bottom: 70px;
    left: 53px;

    .btnMain {
        :hover .menu{
            display: flex;
            flex-direction: column;
            transform: scale(1);
            img {
                transform: scale(1)
            }
            .img1 {
                transition: transform 1s;
            }
            .img2 {
                transition: transform 1.25s;
            }
            .img3 {
                transition: transform 1.5s;
            }
        }
        .btn-more {
            cursor: pointer;
            width: 45px;
            height: 45px;
            border-radius: 45px;
            color: white;
            background-color: #6225B5;
            font-size: 30px;
            font-weight: 300;
            box-shadow: 0 10px 25px -5px rgb(44 179 240 / 60%);
            
        }
        .menu {
            display: flex;
            align-items: center;
            justify-content: space-between;
            transform: scale(0);
            img {
                width: 40px;
                height: 40px;
                margin-bottom: 10px;
                transform: scale(0);
                cursor: pointer;
            }
        }
    }
`